import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  btnType = '';

  openLink(link: string) {
    this.btnType = '';
    console.log(link);
    window.open(link, '_blank');
  }

}
