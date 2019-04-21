import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {EmployeServiceService} from '../../employe-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-employe',
  templateUrl: './post-employe.component.html',
  styleUrls: ['./post-employe.component.scss']
})
export class PostEmployeComponent implements OnInit {
  CreateEmploye = new FormGroup({
    empName: new FormControl(),
    empID: new FormControl(),
    empDomain: new FormControl(),
    empSalary: new FormControl(),
    empMobile: new FormControl(),
    empType: new FormControl()
  });
  constructor(private employeService: EmployeServiceService, private route: Router) { }
  public Employe = [];
  public id;
  ngOnInit() {
    this.employeService.currentdata.subscribe(response => {
      if (response != null) {
        this.CreateEmploye = new FormGroup({
          empName: new FormControl(response.empName),
          empID: new FormControl(response.empID),
          empDomain: new FormControl(response.empDomain),
          empSalary: new FormControl(response.empSalary),
          empMobile: new FormControl(response.empMobile),
          empType: new FormControl(response.empType)
        });
        this.id = response._id;
      }
    });
  }
  onsubmit() {
    const data = this.CreateEmploye.value;
    if (this.id === undefined) {
      this.employeService
        .uploadEmploye(data)
        .subscribe(response => {
          if (response.status === 200) {
            this.route.navigate(['employe/getemploye']);
            alert(response.message);

          } else {
            alert(response.message);
          }
        });
    } else {
      this.employeService.updateEmploye(this.id, data).subscribe(response => {
        if (response.status === 200) {
          alert(response.message);
          this.route.navigate(['employe/getemploye']);

        } else {
          alert('OOPS! The details are not updated');
        }
      });
    }
  }
  clear() {
    this.CreateEmploye.reset();
  }

}
