import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {EmployeServiceService} from '../employe-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private employeService: EmployeServiceService, private route: Router) { }

  signupform = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern(`^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$`),
      Validators.maxLength(20)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(`^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@`
      + `[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$`)
    ]),
    phoneNumber: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        `^(?=.*[A-Z])(?=.*[!@#$&*\^%\*\.])(?=.*[0-9])(?=.*[a-z]).{8,32}$`
      )
    ]),
  });

  onsubmit() {
    const data = this.signupform.value;
    this.employeService.signingup(data).subscribe(response => {
      if (response.status === 200) {
        alert(response.message);
        this.route.navigate(['/signin']);
      } else {
        alert('not signedup');
      }
    });
  }
  clear() {
    this.signupform.reset();
  }

  ngOnInit() {
  }

}
