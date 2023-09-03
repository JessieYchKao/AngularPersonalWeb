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
  @ViewChild('subtitle', { static: true }) subtitle!: ElementRef;
  @ViewChild('skills', {static: false}) skills!: ElementRef<HTMLDivElement>;
  @ViewChild('education', {static: false}) education!: ElementRef<HTMLDivElement>;
  @ViewChild('experience', {static: false}) experience!: ElementRef<HTMLDivElement>;

  subShow: boolean = false;
  titleShrink: boolean = false;
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
    const titleHeight = 195;
    const skill = this.skills.nativeElement.getBoundingClientRect();
    // console.log(`skills top: ${skill.top} bottom: ${skill.bottom}`);

    const edu = this.education.nativeElement.getBoundingClientRect();
    // console.log(`education top: ${edu.top} bottom: ${edu.bottom}`);

    const exp = this.experience.nativeElement.getBoundingClientRect();

    const scrollElement = this.scrollElementRef.nativeElement;
    if (scrollElement.scrollTop > 100) {
      this.titleShrink = true;
      if (skill.top <= titleHeight && skill.bottom > titleHeight) {
        this.subShow = true;
        this.subtitle.nativeElement.innerText = 'SKILLS';
      } else if (edu.top <= titleHeight && edu.bottom > titleHeight) {
        this.subShow = true;
        this.subtitle.nativeElement.innerHTML = 'EDUCATION';
      } else if (exp.top <= titleHeight && exp.bottom > titleHeight) {
        this.subShow = true;
        this.subtitle.nativeElement.innerHTML = 'WORK EXP';
      }
    } else {
      this.titleShrink = false;
      this.subShow = false;
      this.title.nativeElement.style.transition = 'font-size 0.5s ease-in-out';
      this.subtitle.nativeElement.innerText = '';
    }
  }
}
