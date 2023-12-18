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
  @ViewChild('images', { static: false }) images!: ElementRef;

  works = [
    {
      title: 'Distributed Sensor Network',
      bg: 'assets/works/acd6.png',
      more: {
        title: 'An autonomous IoT network with ESP8266 devices, allowing self-organization, with a Raspberry Pi log server collecting data.',
        content: 'This project focuses on creating an autonomous IoT network involving ESP8266 devices and a Raspberry Pi (RPi). The system allows ESP8266 devices to communicate via broadcast, sharing analog light sensor readings and designating a \'Master\' device based on the highest sensor reading. Additionally, an LED ring is connected to each ESP8266 to visually represent the brightness level.The RPi is integrated with an LED Matrix, providing a visual representation of the photocell data trace of the master device over the past ~30 seconds. Furthermore, a 4-digit 7-segment display is employed to show the last 3 digits of the IP address of the current Master.To enhance user interaction, the system includes a Graphical User Interface (GUI) displaying the photocell data trace and a bar chart. Users can choose the specific log file for analysis, making the system more versatile and user-friendly.',
        images: ['assets/works/acd6_1.png','assets/works/acd6_2.png','assets/works/acd6_3.png','assets/works/acd6_4.png','assets/works/acd6_5.png'],
        demo: 'https://drive.google.com/file/d/10y92JaCqSt_dLpVMYE58s7W4lGU6slHA/view?usp=sharing',
        github: 'https://github.com/JessieYchKao/Distributed-Sensor-Network',
        tags: ['Python', 'C++', 'ESP8266', 'Raspberry Pi']
      }
    },
    {
      title: 'Wireless Pulse Monitoing System',
      bg: 'assets/works/acd7.png',
      more: {
        title: 'A wireless pulse monitoring system using two Raspberry Pi units and a pulse sensor. The system captures pulse signals, transmits over Bluetooth, and displays the pulse data along with other relevant health metrics.',
        content: 'This wireless pulse monitoring system comprises two Raspberry Pi units. The first unit is connected to an Analog-to-Digital Converter (ADC) and captures digital pulse signals through a pulse sensor. Subsequently, it transmits the acquired data over Bluetooth. The second unit is responsible for displaying the pulse data graph, calculating Beats Per Minute (BPM), and presenting other relevant health metrics on a Graphical User Interface (GUI) at the receiving end.The system adheres to the Nyquist Theorem for an appropriate sample rate. BPM calculation involves the use of pre-processing and post-processing techniques, complemented by a low-pass filter and a sliding window. To determine suggested BPM values for different age groups, the system relies on an age input and a JSON file.',
        images: ['assets/works/acd7_1.png','assets/works/acd7_2.png','assets/works/acd7_3.png','assets/works/acd7_4.png','assets/works/acd7_5.png'],
        demo: 'https://drive.google.com/file/d/1V-LnDiuW1aX7nh6y_cBbI9LMcPuf0I7B/view?usp=sharing',
        github: 'https://github.com/JessieYchKao/PulseMonitoringSystem',
        tags: ['Python', 'Raspberry Pi', 'Pulse Sensor', 'ADC', 'PyQt']
      }
    },
    {
      title: 'IoT Light Sensor Communication',
      bg: 'assets/works/acd5.png',
      more: {
        title: 'A project that demonstrate the communication between a Raspberry Pi and an ESP8266 microcontroller to control LEDs based on light sensor data.',
        content: 'This project establishes communication between a Raspberry Pi and an ESP8266 microcontroller. The ESP8266 collects light sensor data and transmits it to the Raspberry Pi, which then processes the data and controls the illumination of different LEDs (Red, Yellow, Green, and White) based on the received sensor data.',
        images: ['assets/works/acd5_1.png','assets/works/acd5_2.png'],
        demo: 'https://drive.google.com/file/d/1WrScIqkv76lKfiEBr7FWv31vHqEYWnRY/view',
        github: 'https://github.com/JessieYchKao/IoT-Light-Sensor-Communication',
        tags: ['Python', 'C++', 'ESP8266', 'Raspberry Pi', 'GJD 1602 IIC']
      }
    },
    {
      title: 'Smart Home App',
      bg: 'assets/works/prj4.png',
      more: {
        title: 'An app designed to control and communicate with IoT devices in a smart home through the use of an IoT gateway.',
        content: 'The IoT gateways developed by our company offer services that facilitate the integration of various brands and types of devices into a unified network. Through the Smart Home App, users can effortlessly control and communicate with these devices using their smartphones.',
        images: ['assets/works/prj4_1.png','assets/works/prj4_2.png'],
        tags: ['Angular', 'Python', 'MySQL', 'HTML', 'TypeScript', 'SCSS']
      }
    },
    {
      title: 'Head End System',
      bg: 'assets/works/prj5.jpg',
      more: {
        title: 'A system designed to manage meter data for Taipower, a state-owned power company.',
        content: 'The Head End System, tailored for Taipower, a state-owned power company, is a comprehensive solution. It empowers the management of smart meters, facilitates data reception from the meters, and provides a visual representation of meter locations on an interactive map. This map is dynamically generated by a map server utilizing vector tiles.',
        images: ['assets/works/prj5_1.png'],
        tags: ['Angular', 'Python', 'MySQL', 'HTML', 'TypeScript', 'SCSS']
      }
    },
    {
      title: 'What To Eat',
      bg: 'assets/works/side1.png',
      more: {
        title: 'A restaurant roulette app called "What to Eat", which is my passion project, designed to solve the most common challenge in my family: deciding what to eat',
        content: 'Are you familiar with those never-ending family debates over what to eat? I certainly was, and that\'s why I embarked on creating this app. Now, when it\'s mealtime, deciding where to dine is no longer a hassle! Behind the scenes, "What to Eat" is powered by Angular, .NET Core, and MySQL, ensuring a seamless and reliable user experience in both Chinese and English.',
        images: ['assets/works/side1_1.png', 'assets/works/side1_2.png', 'assets/works/side1_3.png'],
        demo: 'https://youtube.com/shorts/J06KtAJgDWw?feature=share',
        tags: ['Angular', '.NET Core', 'MySQL']
      }
    },
    {
      title: 'Super Annoying',
      bg: 'assets/works/acd3.png',
      more: {
        title: 'A fun mobile game named "Super Annoying" designed to relieve stress.',
        content: 'In Software Studio, our team developed a fun mobile game using Unity. It\'s a small game designed for stress relief. In this game, various foods continuously fall down the screen, and the player\'s goal is to make the character eat the meat by tapping the screen. This causes the character to grow larger, earning the player points. However, if the character consumes pills or vegetables, he will become thinner, resulting in a deduction of points. The game continues until the player\'s score becomes negative, at which point the game is over.',
        images: ['assets/works/acd3.png', 'assets/works/acd3_more.png'],
        tags: ['C#', 'Unity']
      }
    },
    {
      title: 'Cpu Simulator',
      bg: 'assets/works/acd1.png',
      more: {
        title: 'Designed three MIPS CPU simulators including single-cycle, pipelined, and multi-core MIPS CPU simulators.',
        content: 'Implemented MIPS CPU simulators in C to model single-cycle and pipeline architectures, concurrently developing a virtual memory system incorporating page table translation and demand paging. Sharpened debugging and profiling skills through meticulous analysis of test results, all achieved during the Computer Architecture course, which involved designing and implementing three CPU simulators: single-cycle MIPS, pipelined MIPS, and multi-core MIPS.',
        images: ['assets/works/acd1.png', 'assets/works/acd1_1.png','assets/works/acd1_2.png', 'assets/works/acd1_3.png'],
        tags: ['C']
      }
    },
    {
      title: 'Eye Tracking Recommendation System',
      bg: 'assets/works/acd4.png',
      more: {
        title: 'A recommendation system that combines eye tracking techniques with SVM to make recommendations.',
        content: 'The "Eye Tracking Recommendation System" is a research project supervised by Professor Shang-Hong Lai in Computer Vision Lab. It functions as a shopping website that generates recommendations by analyzing customers’ preferences based on their browsing behaviors. We utilized Tobii for eye tracking, extracted features from shopping item images using VGG16(excluding  the last three fully connected layers), calculated a cosine similarity matrix, and generated recommendations using an SVM-trained model.',
        images: ['assets/works/acd4_1.png', 'assets/works/acd4_2.png'],
        tags: ['Python', 'LibSVM', 'Flask', 'Keras', 'Tobii', 'VGG16', 'Project IRIS']
      }
    },
    {
      title: 'Document Management System',
      bg: 'assets/works/prj1.png',
      more: {
        title: 'A system that manages the approval process of the official documents.',
        content: 'iFlow, a Document Management System, named as the pioneering project for office automation and intelligent transformation, features a responsive design (RWD). It enables employees to create official documents and manage the approval process. Managers and Executives can electronically sign these documents and download PDF copies directly from the system. This innovative system, iFlow, is currently in use by a financial conglomerate comprising nine companies and has been implemented using Angular, .NET Core, and MSSQL technologies.',
        images: ['assets/works/prj1.png','assets/works/prj1_more.png'],
        tags: ['Angular', '.NET Core', 'MSSQL', 'HTML', 'TypeScript', 'SCSS']
      }
    },
    {
      title: 'Utilities Expense System',
      bg: 'assets/works/prj2.png',
      more: {
        title: 'A system that oversees the payment of water, electricity, Internet, and phone bills for over 160 bank branches and automatically posts the expenses to the General Ledger.',
        content: 'On a monthly basis, the water, electricity, Internet, and phone bills for more than 160 bank branches are paid using credit cards. The Utilities Expense System receives and stores the credit card statement data. General Affairs Personnel and Financial Officers then allocate the expenses, and the system automatically updates the General Ledger.',
        images: ['assets/works/prj2.png','assets/works/prj2_more.png'],
        tags: ['ASP', 'MSSQL']
      }
    },
    {
      title: 'Employee Data Management System',
      bg: 'assets/works/prj3.png',
      more: {
        title: 'A system that manages employee data and seamlessly integrates it with hundreds of other systems within the bank.',
        content: 'The Employee Data Management System efficiently handles employee personal information, insurance details, salary accounts, and licenses. This system executes SQL Jobs during the night, merging and providing various data to hundreds of bank systems. This ensures that these systems have access to the latest data, enabling them to conduct their operations the following day.',
        images: ['assets/works/prj3.png','assets/works/prj3_more.png'],
        tags: ['ASP', 'MSSQL']
      }
    },
    
  ];

  more: any;
  imageIdx: number = 1;

  constructor(private router: Router) { }

  workOnClick(element: any, more: any) {
    this.subtitle.nativeElement.innerText = element.innerText;
    this.more = more;
    this.imageIdx = 1;
  }

  goBack() {
    if (!this.more) return;
    this.subtitle.nativeElement.innerText = '';
    this.more = null;
  }

  next() {
    this.imageIdx = (this.imageIdx >= this.more.images.length) ? 1 : this.imageIdx + 1;
    this.slider.nativeElement.style.transform = `translateX(-${(this.imageIdx-1)*(this.images.nativeElement.offsetWidth-5)}px)`;
  }
  prev() {
    this.imageIdx = (this.imageIdx <= 1) ? this.more.images.length : this.imageIdx - 1;
    this.slider.nativeElement.style.transform = `translateX(-${(this.imageIdx-1)*(this.images.nativeElement.offsetWidth-5)}px)`;
  }

  showDemo(url: string) {
    window.open(url, '_blank');
  }
}
