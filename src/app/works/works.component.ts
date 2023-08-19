import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {

  @ViewChild('scrollElement', { static: true }) scrollElementRef!: ElementRef;
  @ViewChild('title', { static: true }) title!: ElementRef;
  @ViewChild('subtitle', { static: true }) subtitle!: ElementRef;
  @ViewChild('slider', { static: false }) slider!: ElementRef;

  works = [
    {
      title: 'Eye Tracking Recommendation System',
      bg: '../../assets/works/acd4.png',
      more: {
        title: 'A recommendation system that combines eye tracking techniques with SVM to make recommendations.',
        content: '"Eye Tracking Recommendation System" is a research project under the supervision of Professor Shang-Hong Lai in Computer Vision Lab. It is a shopping website that could make recommendations by analyzing customers’ preferences based on their browsing behaviors. We used Tobii for eye tracking, extracted features of the shopping items images through VGG16(eliminated the last three fully connected layers), calculated the cosine similarity matrix, and made a recommendation based on the model that was trained by SVM.',
        images: ['../../assets/works/acd4_more.png'],
        tags: ['Python', 'LibSVM', 'Flask', 'Keras', 'Tobii', 'VGG16', 'Project IRIS']
      }
    },
    {
      title: 'Super Annoying',
      bg: '../../assets/works/acd3.png',
      more: {
        title: 'A fun mobile game named "Super Annoying" designed to relieve stress.',
        content: 'In Software Studio, our team developed a fun mobile game using Unity. It\'s a small game designed to relieve stress. While foods keep falling down, the player must let the character eat the meat by clicking the screen so that he can grow fatter and the player gets points. If the character eats the pills or vegetables, he will become thinner and the player will lose points. Once the score is negative, the game is over.',
        images: ['../../assets/works/acd3_more.png'],
        tags: ['C#', 'Unity']
      }
    },
    {
      title: 'Cpu Simulator',
      bg: '../../assets/works/acd1.png',
      more: {
        title: 'Designed three MIPS CPU simulators including single-cycle, pipelined, and multi-core MIPS CPU simulators.',
        content: 'During the course of Computer Architecture, I implemented three CPU similators including single-cycle, pipeline, and multi-core MIPS CPU simulators.',
        images: ['../../assets/works/acd1_1.png','../../assets/works/acd1_2.png', '../../assets/works/acd1_2.png'],
        tags: ['C++']
      }
    },
    {
      title: 'Document Management System',
      bg: '../../assets/works/prj1.png'
    },
    {
      title: 'Utilities Expense System',
      bg: '../../assets/works/prj2.png'
    },
    {
      title: 'Employee Data Management System',
      bg: '../../assets/works/prj3.png'
    },
    {
      title: 'Smart Home App',
      bg: '../../assets/works/prj4.png'
    },
    {
      title: 'Head End System',
      bg: '../../assets/works/prj5.png'
    }
  ];

  more: any;
  imageIdx: number = 1;

  constructor() { }

  workOnClick(element: any, more: any) {
    this.title.nativeElement.style.fontSize = '40px';
    // this.title.nativeElement.style.transition = 'all 0.5s ease-in-out';
    this.subtitle.nativeElement.innerText = ' X ' + element.innerText;
    // this.subtitle.nativeElement.style.transition = 'all 0.5s ease-in-out';
    this.more = more;
  }

  goBack() {
    if (!this.more) return;
    this.title.nativeElement.style.fontSize = '50px';
    this.title.nativeElement.style.transition = 'all 0.5s ease-in-out';
    this.subtitle.nativeElement.innerText = '';
    this.more = null;
  }

  next() {
    this.imageIdx = (this.imageIdx >= this.more.images.length) ? 1 : this.imageIdx + 1;
    this.slider.nativeElement.style.transform = `translateX(-${(this.imageIdx-1)*600}px)`;
  }
  prev() {
    this.imageIdx = (this.imageIdx <= 1) ? this.more.images.length : this.imageIdx - 1;
    this.slider.nativeElement.style.transform = `translateX(-${(this.imageIdx-1)*600}px)`;
  }
}
