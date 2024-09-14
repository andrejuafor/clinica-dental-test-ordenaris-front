import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatMakesUsCardComponent } from '../components/what-makes-us-card/what-makes-us-card.component';
import { DoctorInfoCardComponent } from '../components/doctor-info-card/doctor-info-card.component';



@NgModule({
  declarations: [WhatMakesUsCardComponent, DoctorInfoCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WhatMakesUsCardComponent,
    DoctorInfoCardComponent
  ]
})
export class SharedModule { }
