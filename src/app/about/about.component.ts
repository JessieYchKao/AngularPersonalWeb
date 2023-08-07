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

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('scroll', ['$event'])
  onScroll() {
    this.scrollFunction();
  }


  isIntersecting(title: string) {
    console.log(title);
  }

  navigate(page: string) {
    this.router.navigate([page]);
  }

  scrollFunction() {
    // const header = document.getElementById('header');
    // console.log(window);
    // if (window.scrollY > 50 || document.documentElement.scrollTop > 50) {
    //   this.renderer.setStyle(header, 'fontSize', '30px');
    // } else {
    //   this.renderer.setStyle(header, 'fontSize', '90px');
    // }
    const scrollElement = this.scrollElementRef.nativeElement;
    console.log(scrollElement.scrollTop);
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
