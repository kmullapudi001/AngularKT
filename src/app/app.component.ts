import { Component } from '@angular/core';

import { FormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      username: [''],
      password:['']
    })
  }

  submitForm() {
    console.log(this.form.value);
  }
  
}
