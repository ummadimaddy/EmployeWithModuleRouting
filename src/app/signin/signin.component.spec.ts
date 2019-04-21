import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validator} from '@angular/forms';
import {MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

import { SigninComponent } from './signin.component';
import {EmployeServiceService} from '../employe-service.service';
describe('SigninComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule
      ],
      providers: [EmployeServiceService]
    });
  });

  it('Sign In component should be created', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const signInComponent = fixture.debugElement.componentInstance;
    expect(signInComponent).toBeTruthy();
  });

  it('should have a instance of EmployeServiceService ', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const signInComponent = fixture.debugElement.componentInstance;
    const employeService = fixture.debugElement.injector.get(EmployeServiceService);
    fixture.detectChanges();
    expect(employeService).toBeTruthy();
  });

  it('it should render title in a h2 tag', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('SignIn');
  });

  it('form should be invalid', () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const signInComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    signInComponent.loginform.controls.email.setValue('');
    signInComponent.loginform.controls.password.setValue('ABZ@E1');
    expect(signInComponent.loginform.valid).toBeFalsy();
  });

  it(`form should be invalid`, () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const signInComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    signInComponent.loginform.controls[`email`].setValue('abc');
    signInComponent.loginform.controls[`password`].setValue('');
    expect(signInComponent.loginform.valid).toBeFalsy();
  });

  it(`form should be valid`, () => {
    const fixture = TestBed.createComponent(SigninComponent);
    const signInComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    signInComponent.loginform.controls[`email`].setValue('abcdefg@gmail.com');
    signInComponent.loginform.controls[`password`].setValue('Abcdefg@1234');
    expect(signInComponent.loginform.valid).toBeTruthy();
  });
});
