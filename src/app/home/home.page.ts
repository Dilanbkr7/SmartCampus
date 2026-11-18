
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonIcon,
  IonLabel
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  bookOutline,
  peopleOutline,
  phonePortraitOutline,
  calendarOutline,
  schoolOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonIcon,
    IonLabel,
    DatePipe,
    RouterLink
  ],
})
export class HomePage {

  fecha = new Date();

  constructor() {
    addIcons({
      bookOutline,
      peopleOutline,
      phonePortraitOutline,
      calendarOutline,
      schoolOutline
    });
  }

}
