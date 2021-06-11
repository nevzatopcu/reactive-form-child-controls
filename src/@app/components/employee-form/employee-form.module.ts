import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeFormComponent } from './employee-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [EmployeeFormComponent],
  declarations: [EmployeeFormComponent],
})
export class EmployeeFormModule {}
