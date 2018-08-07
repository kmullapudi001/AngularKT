import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent  {

  form: FormGroup;
  dataList = [{ name: 'khushwant', email: 'khu@gmail.com' }, { name: 'Karthik', email: 'kar@gmail.com' }];
  movie: string = 'thriller';
  isActive: boolean = false;

  constructor(public fb: FormBuilder, public data: DataService) {
   
    this.form = fb.group({
      name: [''],
      email: [''],
      password: [''],
      cpassword: ['']
    });

   // this.getdata();
   
  }

  submitForm() {
    console.log(this.form.value);
    let name = this.form.controls['name'].value;
    let email = this.form.controls['email'].value;
    let password = btoa(this.form.controls['password'].value);

    this.data.saveData(name, email, password).subscribe(res => {
      let response = res.headers.get('statusText');
      alert('User Registeed successfully');
    }, error => {
      //let status = error.headers.get('status');
      alert(error);
      });
  }
  getdata() {
    this.data.getData().subscribe(res => {
      
      this.dataList = res.json();
      console.log(this.dataList);
    
    });
  }
 

}
