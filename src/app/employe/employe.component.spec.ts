import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeRoutingModule } from './employe-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {PostEmployeComponent} from './UploadEmploye/post-employe.component';
import {GetEmployeComponent} from './EmployeList/get-employe.component';
import { EmployeComponent } from './employe.component';
import { MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
describe('EmployeComponent', () => {
    beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeComponent,
        PostEmployeComponent,
        GetEmployeComponent ],
      imports: [
        BrowserAnimationsModule,
        EmployeRoutingModule,
        RouterTestingModule,
        FormsModule, ReactiveFormsModule,
        MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule
      ]
    });
  });



    it('EmployeComponent should be created', () => {
    const fixture = TestBed.createComponent(EmployeComponent);
    const employeComponent = fixture.debugElement.componentInstance;
    expect(employeComponent).toBeTruthy();
  });
});
