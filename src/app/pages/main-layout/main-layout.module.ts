import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeProvideHightComponent } from './features/we-provide-hight/we-provide-hight.component';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { HowToGetServiceComponent } from './features/how-to-get-service/how-to-get-service.component';
import { AlwaysLoughComponent } from './features/always-lough/always-lough.component';

@NgModule({
  declarations: [
    WeProvideHightComponent,
    HowToGetServiceComponent,
    MainLayoutComponent,
    AlwaysLoughComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule
  ]
})
export class MainLayoutModule { }
