import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeProvideHightComponent } from './features/we-provide-hight/we-provide-hight.component';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HowToGetServiceComponent } from './features/how-to-get-service/how-to-get-service.component';
import { AlwaysLoughComponent } from './features/always-lough/always-lough.component';
import { WhatMakesUsComponent } from './features/what-makes-us/what-makes-us.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { LetUsBrightenComponent } from './features/let-us-brighten/let-us-brighten.component';
import { WhoWeAreComponent } from './features/who-we-are/who-we-are.component';
import { MeetOurDoctorsComponent } from './features/meet-our-doctors/meet-our-doctors.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { WhatOurClientSaysComponent } from './features/what-our-client-says/what-our-client-says.component';

@NgModule({
  declarations: [
    WeProvideHightComponent,
    HowToGetServiceComponent,
    MainLayoutComponent,
    AlwaysLoughComponent,
    WhatMakesUsComponent,
    LetUsBrightenComponent,
    WhoWeAreComponent,
    MeetOurDoctorsComponent,
    WhatOurClientSaysComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule,
    SwiperModule,
    SharedModule
  ]
})
export class MainLayoutModule { }
