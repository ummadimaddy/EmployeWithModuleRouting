import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatRadioModule, MatFormFieldModule, MatButtonModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

import { EmployeRoutingModule } from './employe-routing.module';
import { PostEmployeComponent } from './UploadEmploye/post-employe.component';
import { EmployeComponent } from './employe.component';
import {GetEmployeComponent} from './EmployeList/get-employe.component';
@NgModule({
  declarations: [PostEmployeComponent, GetEmployeComponent, EmployeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EmployeRoutingModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class EmployeModule { }
