import { Component } from '@angular/core';

@Component({
  selector: 'app-how-to-get-service',
  templateUrl: './how-to-get-service.component.html',
  styleUrls: ['./how-to-get-service.component.scss']
})
export class HowToGetServiceComponent {
  public cardList: any[] = [
    {
      icon: '/assets/media/icons/phone-icon.png',
      title: 'Call for appointment'
    },
    {
      icon: '/assets/media/icons/calendar-check.png',
      title: 'Get a Date & Serial'
    },
    {
      icon: '/assets/media/icons/more-sqr.png',
      title: 'Consult Your dentist'
    },
  ]
}
