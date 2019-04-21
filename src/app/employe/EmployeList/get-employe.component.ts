import { Component, OnInit } from '@angular/core';
import {EmployeServiceService} from '../../employe-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-get-employe',
  templateUrl: './get-employe.component.html',
  styleUrls: ['./get-employe.component.scss']
})
export class GetEmployeComponent implements OnInit {
public emps = [];
  constructor(public employeService: EmployeServiceService, private route: Router) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeService.listEmployees().subscribe(response => {
      if (response.status === 200) {
        this.emps = response.data;
        console.log(response);

      }
    });
  }

  edit(data) {
    this.employeService.putData(data);
    this.route.navigate(['employe/postemploye']);
  }

  delete(data) {
    this.employeService.removeEmploye(data._id).subscribe(response => {
      if (response.status === 200) {
        alert(response.message);
        this.getEmployees();
      } else {
        alert(response.message);
      }
    });
  }
  signout() {
    this.employeService.setLoggedIn(false);
    window.localStorage.removeItem('userid');
    this.route.navigate(['/signin']);
  }

}
