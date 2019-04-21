import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { SignupComponent } from './signup.component';
import {EmployeServiceService} from '../employe-service.service';
describe('SignupComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule
      ]
    });
  });

  it('Sign Up Component should be created', () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signUpComponent = fixture.debugElement.componentInstance;
    expect(signUpComponent).toBeTruthy();
  });

  it('should have a instance of EmployeServiceService ', () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signupComponent = fixture.debugElement.componentInstance;
    const employeService = fixture.debugElement.injector.get(EmployeServiceService);
    fixture.detectChanges();
    expect(employeService).toBeTruthy();
  });

  it('should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent)
      .toContain('Registration');
  });

  it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signupComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    signupComponent.signupform.controls[`name`].setValue('');
    signupComponent.signupform.controls[`email`].setValue('');
    signupComponent.signupform.controls[`phoneNumber`].setValue('');
    signupComponent.signupform.controls[`password`].setValue('');
    expect(signupComponent.signupform.valid).toBeFalsy();
  });

  it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signupComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    signupComponent.signupform.controls[`name`].setValue('Abc');
    signupComponent.signupform.controls[`email`].setValue('');
    signupComponent.signupform.controls[`phoneNumber`].setValue('');
    signupComponent.signupform.controls[`password`].setValue('');
    expect(signupComponent.signupform.valid).toBeFalsy();
  });

  it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signupComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    signupComponent.signupform.controls[`name`].setValue('');
    signupComponent.signupform.controls[`email`].setValue('abcde@gmail.com');
    signupComponent.signupform.controls[`phoneNumber`].setValue('');
    signupComponent.signupform.controls[`password`].setValue('');
    expect(signupComponent.signupform.valid).toBeFalsy();
  });

  it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signupComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    signupComponent.signupform.controls[`name`].setValue('');
    signupComponent.signupform.controls[`email`].setValue('abc@abc.com');
    signupComponent.signupform.controls[`phoneNumber`].setValue('29292');
    signupComponent.signupform.controls[`password`].setValue('');
    expect(signupComponent.signupform.valid).toBeFalsy();
  });

  it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signupComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    signupComponent.signupform.controls[`name`].setValue('');
    signupComponent.signupform.controls[`email`].setValue('');
    signupComponent.signupform.controls[`phoneNumber`].setValue('');
    signupComponent.signupform.controls[`password`].setValue('Abc@1234');
    expect(signupComponent.signupform.valid).toBeFalsy();
  });

  it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signupComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    signupComponent.signupform.controls[`name`].setValue('');
    signupComponent.signupform.controls[`email`].setValue('');
    signupComponent.signupform.controls[`phoneNumber`].setValue('1234');
    signupComponent.signupform.controls[`password`].setValue('');
    expect(signupComponent.signupform.valid).toBeFalsy();
  });

  it(`form should be valid`, () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signupComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    signupComponent.signupform.controls[`name`].setValue('ummadi');
    signupComponent.signupform.controls[`email`].setValue('ummadi@gmail.com');
    signupComponent.signupform.controls[`phoneNumber`].setValue('123456789');
    signupComponent.signupform.controls[`password`].setValue('Ummadi@55');
    expect(signupComponent.signupform.valid).toBeTruthy();
  });
});
