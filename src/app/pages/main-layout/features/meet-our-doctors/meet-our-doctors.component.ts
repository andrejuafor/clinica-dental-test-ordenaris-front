import { Component } from '@angular/core';
import { MeetOurDoctorsService } from './meet-our-doctors.service';
import Swiper from 'swiper';
import { swiperConfig } from './config/config-options';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-meet-our-doctors',
  templateUrl: './meet-our-doctors.component.html',
  styleUrls: ['./meet-our-doctors.component.scss']
})
export class MeetOurDoctorsComponent {
  private subscription: Subscription[] = [];
  public doctorsList: any[] = [];
  constructor(
    private meetOurDoctorsService: MeetOurDoctorsService
  ) { }

  ngOnInit(): void {
    this.getDoctorsList();
  }

  ngAfterViewInit(): void {
    new Swiper('.swiper-container', swiperConfig);
  }

  private getDoctorsList(): void {
    const subscribe = this.meetOurDoctorsService.getDoctorsList().subscribe((data: any) => {
      this.doctorsList = data.list;
    });
    this.subscription.push(subscribe);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sb) => sb.unsubscribe());
  }
}
