import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-info-card',
  templateUrl: './doctor-info-card.component.html',
  styleUrls: ['./doctor-info-card.component.scss']
})
export class DoctorInfoCardComponent {
  @Input() doctorName!: string;
  @Input() specialty!: string;
  @Input() university!: string;
  @Input() photo!: string;
}
