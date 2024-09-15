import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NotifierService } from 'angular-notifier';
import { SubscribeNewsletterService } from './subscribe-newsletter.service';

@Component({
  selector: 'app-subscribe-newsletter',
  templateUrl: './subscribe-newsletter.component.html',
  styleUrls: ['./subscribe-newsletter.component.scss']
})
export class SubscribeNewsletterComponent {
  private subscription: Subscription[] = [];
  private emailRegex: any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  private readonly notifier: NotifierService;
  public doctorsList: any[] = [];
  public formGroup!: FormGroup;
  public tomorrowDate: any;

  constructor(
    private fb: FormBuilder,
    private notifierService: NotifierService,
    private subscribeNewsletterService: SubscribeNewsletterService
  ) {
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.formGroup = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', Validators.compose([
          Validators.required,
          Validators.pattern(this.emailRegex),
        ])],
      },
    )
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName]
    return control.invalid && (control.dirty || control.touched)
  }


  public validForm(): void {
    this.formGroup.markAllAsTouched()
    if (this.formGroup.get('email')?.hasError('pattern')) {
      this.notifier.notify('error', 'Enter a valid email');
      return;
    }
    if (!this.formGroup.valid) {
      this.notifier.notify('error', 'Fill out all marked fields');
      return
    }
    this.createNewsletterSubscription();
  }

  private createNewsletterSubscription(): void {
    const params = {
      nombre: this.formGroup.get('name')?.value,
      correo: this.formGroup.get('email')?.value
    };
    const subscribe = this.subscribeNewsletterService.createNewsletterSubscription(params).subscribe((data: any) => {
      this.notifier.notify('success', 'You have subscribed to our newsletter!');
      this.formGroup.reset();
    });

    this.subscription.push(subscribe);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sb) => sb.unsubscribe());
  }
}
