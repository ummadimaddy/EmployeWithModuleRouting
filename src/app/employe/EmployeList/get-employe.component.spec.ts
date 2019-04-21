import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { GetEmployeComponent } from './get-employe.component';
import {EmployeServiceService} from '../../employe-service.service';
import { of } from 'rxjs';
describe('GetEmployeComponent', () => {
    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmployeComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule
      ]
    });
  });

    it('Get Empoye Component should be created', () => {
    const fixture = TestBed.createComponent(GetEmployeComponent);
    const getEmployeComponent = fixture.debugElement.componentInstance;
    expect(getEmployeComponent).toBeTruthy();
  });

    it('should have a instance of EmployeServiceService ', () => {
    const fixture = TestBed.createComponent(GetEmployeComponent);
    const getEmployeComponent = fixture.debugElement.componentInstance;
    const employeService = fixture.debugElement.injector.get(EmployeServiceService);
    fixture.detectChanges();
    expect(employeService).toBeTruthy();
  });

    it('should fetch all employe data ', () => {
    const employeData = {
      _id : '5caad284c6ce4d410823ad01',
      empName : 'Madhav',
      empID : 'M1050787',
      empDomain : 'web-tech',
      empSalary : '3.4L',
      empMobile : 9791906657,
      empType : 'True'
    };
    let response;
    const fixture = TestBed.createComponent(GetEmployeComponent);
    const getEmployeComponent = fixture.debugElement.componentInstance;
    const employeService = fixture.debugElement.injector.get(EmployeServiceService);
    fixture.detectChanges();
    spyOn(employeService, 'listEmployees').and.returnValue(of(employeData));

    employeService.listEmployees().subscribe(res => {
      response = res;
    });
    expect(response).toEqual(employeData);
  });

    it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(GetEmployeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Employee List');
  });
});
