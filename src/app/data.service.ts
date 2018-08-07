import { Injectable } from '@angular/core';

import { HttpModule, Http,Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: Http) { }

  getData() {
    return this.http.get('http://localhost:3000/getAllUsers');
  }
  saveData(name, email, password) {
    let body = {
      "name": name,
      "email": email,
      "password": password,
    }
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/signup', JSON.stringify(body), { headers: headers } );
  }
}
