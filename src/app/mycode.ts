import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  defaultOption = 'Advanced';
  data = { email: '', dropdown: '', password: '' };
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
    this.data.email = this.form.value.data.email;
    this.data.dropdown = this.form.value.data.dropdown;
    this.data.password = this.form.value.data.password;
    console.log(this.data.email, this.data.dropdown, this.data.password);

    this.form.reset();
  }
}
