import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personalWeb';

  constructor() {
    // this.calculateDeviceHeight();
  }

  @HostListener('window:resize')
  onWindowResize() {
    // this.calculateDeviceHeight();
  }


  private calculateDeviceHeight() {
    const isIPhone = /iPhone/.test(window.navigator.userAgent);
    const height = isIPhone ? this.calculateIPhoneHeight() : window.innerHeight + 'px';
    document.documentElement.style.setProperty('--device-height', height);
  }

  calculateIPhoneHeight() {
    const isSearchBarAtTop = window.screenTop === 0; // Search bar at the top
    const statusBarHeight = 44; // iPhone X from 20 to 44 px
    const searchBarHeight = 44; // Safari's searchbar is 44 px

    if (isSearchBarAtTop) {
      return `calc(100vh - ${statusBarHeight + searchBarHeight}px)`;
    } else {
      return `calc(100vh - ${searchBarHeight}px)`;
    }
  }
}
