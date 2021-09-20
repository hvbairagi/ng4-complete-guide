import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  forbiddenName = ['Test'];

  ngOnInit(): void {
    this.form = new FormGroup({
      projectName: new FormControl(
        null,
        [Validators.required, CustomValidators.invalidProjectName],
        [
          this.forbiddenNameValidatorAsync,
          CustomValidators.asyncInvalidProjectName,
        ]
      ),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('Finished'),
    });

    this.form.statusChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onSubmit() {
    console.log(this.form);
  }

  // forbiddenNameValidator(control: FormControl): { [s: string]: boolean } {
  //   if (this.form.value.indexOf(control) !== -1) {
  //     return { forbidden: true };
  //   }
  //   return null;
  // }

  forbiddenNameValidatorAsync(
    control: FormControl
  ): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ forbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
