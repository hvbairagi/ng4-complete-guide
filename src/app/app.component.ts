import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  @ViewChild('signupForm', { static: false }) sgnForm: NgForm;

  data1 = {
    mail: '',
    sub: '',
    pass: '',
  };

  onSubmit() {
    console.log(this.sgnForm.value);
    this.data1.mail = this.sgnForm.value.email;
    this.data1.sub = this.sgnForm.value.subscription;
    this.data1.pass = this.sgnForm.value.password;
  }
}
