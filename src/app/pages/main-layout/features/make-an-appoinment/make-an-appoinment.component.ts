import { Component } from '@angular/core';
import { MakeAnAppoinmentService } from './make-an-appoinment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-make-an-appoinment',
  templateUrl: './make-an-appoinment.component.html',
  styleUrls: ['./make-an-appoinment.component.scss']
})
export class MakeAnAppoinmentComponent {
  private subscription: Subscription[] = [];
  private readonly notifier: NotifierService;
  public doctorsList: any[] = [];
  public formGroup!: FormGroup;
  public tomorrowDate: any;

  constructor(
    private fb: FormBuilder,
    private notifierService: NotifierService,
    private makeAnAppoinmentService: MakeAnAppoinmentService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.getTomorrowDate();
    this.initForm();
    this.getDoctorsList();
  }

  private initForm(): void {
    this.formGroup = this.fb.group(
      {
        name: ['', Validators.required],
        phone_code: ['+52', Validators.required],
        phone: ['', Validators.required],
        date: ['', Validators.required],
        doctor: ['', Validators.required],
        message: ['', Validators.required],
        privacy_check: [false, Validators.requiredTrue],
      },
    )
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName]
    return control.invalid && (control.dirty || control.touched)
  }

  private getDoctorsList(): void {
    const subscribe = this.makeAnAppoinmentService.getDoctorsList().subscribe((data: any) => {
      this.doctorsList = data.list;
    });
    this.subscription.push(subscribe);
  }

  private getTomorrowDate(): any {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    this.tomorrowDate = `${year}-${month}-${day}`;
  }

  public validForm(): void {
    this.formGroup.markAllAsTouched()
    if (!this.formGroup.valid) {
      this.notifier.notify('error', 'Fill out all marked fields');
      return
    }
    this.createAppointment();
  }

  private createAppointment(): void {
    const params = {
      nombre: this.formGroup.get('name')?.value,
      telefono: `${this.formGroup.get('phone_code')?.value} ${this.formGroup.get('phone')?.value}`,
      fecha: this.formGroup.get('date')?.value,
      doctor: this.formGroup.get('doctor')?.value,
      mensaje: this.formGroup.get('message')?.value
    };
    const subscribe = this.makeAnAppoinmentService.createAppointment(params).subscribe((data: any) => {
      this.notifier.notify('success', 'Your appointment was registered successfully!');
      this.formGroup.reset({
        name: '',
        phone_code: '+52',
        phone: '',
        date: '',
        doctor: '',
        message: '',
        privacy_check: false
      });
    });

    this.subscription.push(subscribe);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sb) => sb.unsubscribe());
  }
}
