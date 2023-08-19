import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  @ViewChild('scrollElement', { static: true }) scrollElementRef!: ElementRef;
  @ViewChild('title', { static: true }) title!: ElementRef;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @HostListener('scroll', ['$event'])
  onScroll() {
    this.scrollFunction();
  }

  navigate(page: string) {
    this.router.navigate([page]);
  }

  scrollFunction() {
    const scrollElement = this.scrollElementRef.nativeElement;
    if (scrollElement.scrollTop > 100) {
      this.title.nativeElement.style.fontSize = '40px';
      this.title.nativeElement.style.transition = 'font-size 0.5s ease-in-out';
      if (scrollElement.scrollTop > 300 && scrollElement.scrollTop < 910) {
        this.title.nativeElement.innerHTML = 'ABOUT ME' + ' X SKILLS';
      } else if (scrollElement.scrollTop >= 910) {
        this.title.nativeElement.innerHTML = 'ABOUT ME' + ' X EXPERIENCE';
      }
    } else {
      this.title.nativeElement.style.fontSize = '50px';
      this.title.nativeElement.style.transition = 'font-size 0.5s ease-in-out';
      this.title.nativeElement.innerHTML = 'ABOUT ME';
    }
  }
}
