import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatMakesUsCardComponent } from '../components/what-makes-us-card/what-makes-us-card.component';
import { DoctorInfoCardComponent } from '../components/doctor-info-card/doctor-info-card.component';
import { OnlyNumbersDirective } from '../utils/only-numbers.directive';



@NgModule({
  declarations: [WhatMakesUsCardComponent, DoctorInfoCardComponent, OnlyNumbersDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    WhatMakesUsCardComponent,
    DoctorInfoCardComponent,
    OnlyNumbersDirective
  ]
})
export class SharedModule { }
