import { Component } from '@angular/core';
import { FormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(public fb: FormBuilder, public router: Router) {
    this.form = fb.group({
      username: [''],
      password: ['']
    })
  }

  submitForm() {
    let username = this.form.controls['username'].value;
    let password = this.form.controls['password'].value;
    if (username == 'admin@gmail.com' && password == '123456') {
      this.router.navigate(['user']);
    }
    else {
      alert('wrong details');
    }
  }

}
