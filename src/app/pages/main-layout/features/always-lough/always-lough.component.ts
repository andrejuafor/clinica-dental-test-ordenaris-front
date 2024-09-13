import { Component } from '@angular/core';

@Component({
  selector: 'app-always-lough',
  templateUrl: './always-lough.component.html',
  styleUrls: ['./always-lough.component.scss']
})
export class AlwaysLoughComponent {
  public whatWeProvideList: any[] = [
    {
      title: 'Check ups'
    },
    {
      title: 'Emergencies'
    },
    {
      title: 'Cosmetic dentistry'
    },
    {
      title: 'Dental implants'
    },
    {
      title: 'Orthodontics'
    },
    {
      title: `Children's dentistry`
    },
    {
      title: 'Preventative checks'
    },
    {
      title: 'Telephone consultations'
    },
  ]
}
