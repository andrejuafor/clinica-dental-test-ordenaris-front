import { Component } from '@angular/core';
import { MeetOurDoctorsService } from './meet-our-doctors.service';
import Swiper from 'swiper';
import { swiperConfig } from './config/config-options';

@Component({
  selector: 'app-meet-our-doctors',
  templateUrl: './meet-our-doctors.component.html',
  styleUrls: ['./meet-our-doctors.component.scss']
})
export class MeetOurDoctorsComponent {
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
    this.meetOurDoctorsService.getDoctorsList().subscribe((data: any) => {
      this.doctorsList = data.list;
    })
  }
}
