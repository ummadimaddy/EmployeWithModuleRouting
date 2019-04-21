import { Component, OnInit, OnDestroy } from '@angular/core';
import {EmployeServiceService} from '../employe-service.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public Person = [];
  public retrieveduserid: string;
  constructor(private employeService: EmployeServiceService, private route: Router) { }

  loginform = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(`^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@`
      + `[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$`)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        `^(?=.*[A-Z])(?=.*[!@#$&*\^%\*\.])(?=.*[0-9])(?=.*[a-z]).{8,32}$`
      )
    ]),
  });



  onsubmit() {
    const data = this.loginform.value;
    this.employeService.signingin(data).subscribe(response => {
      if (response.status === 200) {
        const userid = response.data._id;
        console.log(userid);
        localStorage.setItem('userid', userid);
        this.retrieveduserid = localStorage.getItem('userid');
        console.log(this.retrieveduserid + 'jii');
        alert(response.message);
        this.employeService.setLoggedIn(true);
        this.route.navigate(['employe/getemploye']);
      } else {
        alert('entered credientals are wrong');
      }
    });
  }

  ngOnInit() {
    if (this.retrieveduserid != null) {
      console.log(this.retrieveduserid , 'HIIIIIIIIIIIII');
      this.employeService.setLoggedIn(true);
    }
  }

  clear() {
    this.loginform.reset();
  }
}
