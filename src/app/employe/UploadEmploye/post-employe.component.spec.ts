import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { PostEmployeComponent } from './post-employe.component';
import {EmployeServiceService} from '../../employe-service.service';

describe('PostEmployeComponent', () => {
   beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEmployeComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule
      ]
    });
  });

   it('Post Employe Component should be created', () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    const postEmployeComponent = fixture.debugElement.componentInstance;
    expect(postEmployeComponent).toBeTruthy();
  });

   it('should have a instance of EmployeServiceService ', () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    const postEmployeComponent = fixture.debugElement.componentInstance;
    const employeService = fixture.debugElement.injector.get(EmployeServiceService);
    fixture.detectChanges();
    expect(employeService).toBeTruthy();
  });

   it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent)
      .toContain('Add Employe');
  });

   it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    const postEmployeComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    postEmployeComponent.CreateEmploye.controls[`empName`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empID`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empDomain`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empSalary`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empMobile`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empType`].setValue('');
    expect(postEmployeComponent.CreateEmploye.valid).toBeFalsy();
  });

   it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    const postEmployeComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    postEmployeComponent.CreateEmploye.controls[`empName`].setValue('Madhav');
    postEmployeComponent.CreateEmploye.controls[`empID`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empDomain`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empSalary`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empMobile`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empType`].setValue('');
    expect(postEmployeComponent.CreateEmploye.valid).toBeFalsy();
  });

   it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    const postEmployeComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    postEmployeComponent.CreateEmploye.controls[`empName`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empID`].setValue('M1050787');
    postEmployeComponent.CreateEmploye.controls[`empDomain`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empSalary`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empMobile`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empType`].setValue('');
    expect(postEmployeComponent.CreateEmploye.valid).toBeFalsy();
  });

   it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    const postEmployeComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    postEmployeComponent.CreateEmploye.controls[`empName`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empID`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empDomain`].setValue('Java');
    postEmployeComponent.CreateEmploye.controls[`empSalary`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empMobile`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empType`].setValue('');
    expect(postEmployeComponent.CreateEmploye.valid).toBeFalsy();
  });

   it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    const postEmployeComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    postEmployeComponent.CreateEmploye.controls[`empName`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empID`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empDomain`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empSalary`].setValue('3.4L');
    postEmployeComponent.CreateEmploye.controls[`empMobile`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empType`].setValue('');
    expect(postEmployeComponent.CreateEmploye.valid).toBeFalsy();
  });

   it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    const postEmployeComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    postEmployeComponent.CreateEmploye.controls[`empName`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empID`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empDomain`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empSalary`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empMobile`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empType`].setValue('Male');
    expect(postEmployeComponent.CreateEmploye.valid).toBeFalsy();
  });

   it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    const postEmployeComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    postEmployeComponent.CreateEmploye.controls[`empName`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empID`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empDomain`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empSalary`].setValue('');
    postEmployeComponent.CreateEmploye.controls[`empMobile`].setValue('9791906657');
    postEmployeComponent.CreateEmploye.controls[`empType`].setValue('Male');
    expect(postEmployeComponent.CreateEmploye.valid).toBeFalsy();
  });

   it(`form should be valid`, () => {
    const fixture = TestBed.createComponent(PostEmployeComponent);
    const postEmployeComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    postEmployeComponent.CreateEmploye.controls[`empName`].setValue('Madhav');
    postEmployeComponent.CreateEmploye.controls[`empID`].setValue('M1050787');
    postEmployeComponent.CreateEmploye.controls[`empDomain`].setValue('Java');
    postEmployeComponent.CreateEmploye.controls[`empSalary`].setValue('3.4L');
    postEmployeComponent.CreateEmploye.controls[`empMobile`].setValue('9791906657');
    postEmployeComponent.CreateEmploye.controls[`empType`].setValue('Male');
    expect(postEmployeComponent.CreateEmploye.valid).toBeTruthy();
  });
});
