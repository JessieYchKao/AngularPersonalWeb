import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Subscription, debounceTime } from 'rxjs';

@Directive({
  selector: '[scrollInView]',
  exportAs: 'intersection'
})
export class ScrollInViewDirective {

  @Input() root: HTMLElement | null = null
  @Input() rootMargin = '0px 0px 0px 0px'
  @Input() threshold = 0
  @Input() debounceTime = 250
  @Input() isContinuous = false

  @Output() isIntersecting = new EventEmitter<boolean>()

  _isIntersecting = false;
  subscription: Subscription = new Subscription;


  constructor(private element: ElementRef){}

  ngOnInit () {
    this.subscription = this.createAndObserve()
  }

  ngOnDestroy () {
    this.subscription.unsubscribe()
  }


  createAndObserve () {
    const options: IntersectionObserverInit = {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold,
    }

    return new Observable<boolean>(subscriber => {
      const intersectionObserver = new IntersectionObserver(entries => {
        const { isIntersecting } = entries[0]
        subscriber.next(isIntersecting)

        isIntersecting &&
          !this.isContinuous &&
          intersectionObserver.disconnect()
      }, options)

      intersectionObserver.observe(this.element.nativeElement)

      return {
        unsubscribe () {
          intersectionObserver.disconnect()
        },
      }
    })
      .pipe(debounceTime(this.debounceTime))
      .subscribe(status => {
        this.isIntersecting.emit(status)
        this._isIntersecting = status
      })
  }

}


//source: https://medium.com/allenhwkim/angular-monitor-element-is-in-viewport-after-scrolling-67f4d787647c
//ref: https://blog.prototyp.digital/how-to-implement-intersection-observer-api-in-angular/
