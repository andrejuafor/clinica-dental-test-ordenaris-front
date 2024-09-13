import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatMakesUsCardComponent } from '../components/what-makes-us-card/what-makes-us-card.component';



@NgModule({
  declarations: [WhatMakesUsCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WhatMakesUsCardComponent
  ]
})
export class SharedModule { }
