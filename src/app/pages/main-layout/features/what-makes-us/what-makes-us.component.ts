import { Component } from '@angular/core';

@Component({
  selector: 'app-what-makes-us',
  templateUrl: './what-makes-us.component.html',
  styleUrls: ['./what-makes-us.component.scss']
})
export class WhatMakesUsComponent {
  public cardList: any[] = [
    {
      title: 'Laser Technology',
      description: 'Worlds most advanced Diode Laser. Your treatment experience will be relaxing & smooth',
      icon: '/assets/media/icons/what-makes-us/laser-technology.svg',
    },
    {
      title: 'Painless Injection',
      description: 'Only dental clinic in New York, USA utilising Painless Injection system. You will be amazed!',
      icon: '/assets/media/icons/what-makes-us/3d-dental-scanner.svg',
    },
    {
      title: 'Dental Implant',
      description: '30+ years of experience in Dental Implant with specialist care. You will be able to chew properly again!',
      icon: '/assets/media/icons/what-makes-us/dental-implant.svg',
    },
    {
      title: '3D Dental Scanner',
      description: `One of the world's most advanced 3D Dental Scanner with auto scanning only one in New York!`,
      icon: '/assets/media/icons/what-makes-us/3d-dental-scanner.svg',
    },
    {
      title: 'Digital Smile Design',
      description: 'We help to re-design your smile and shape your teeth to create a customised smile for your face!',
      icon: '/assets/media/icons/what-makes-us/digital-smile-design.svg',
    },
    {
      title: 'Crown and Bridge',
      description: 'Transform you blackish gum to pinkish colour with painless, single appointment Laser Gum Treatment',
      icon: '/assets/media/icons/what-makes-us/crown-n-bridge.svg',
    },
  ]
}
