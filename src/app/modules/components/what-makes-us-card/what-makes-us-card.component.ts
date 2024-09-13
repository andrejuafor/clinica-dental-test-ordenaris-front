import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-what-makes-us-card',
  templateUrl: './what-makes-us-card.component.html',
  styleUrls: ['./what-makes-us-card.component.scss']
})
export class WhatMakesUsCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
}
