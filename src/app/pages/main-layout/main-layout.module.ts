import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeProvideHightComponent } from './features/we-provide-hight/we-provide-hight.component';
import { MainLayoutComponent } from './main-layout.component';
import { MainLayoutRoutingModule } from './main-layout-routing.module';

@NgModule({
  declarations: [
    WeProvideHightComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    MainLayoutRoutingModule
  ]
})
export class MainLayoutModule { }
