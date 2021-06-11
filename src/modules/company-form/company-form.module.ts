import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddressFormModule } from '@app/components/address-form';
import { EmployeeFormModule } from '@app/components/employee-form';
import { FormValueRendererModule } from '@app/components/form-value-renderer';
import { CompanyFormBuilderService } from '@app/services';
import { AddEmployeeComponent } from './components/add-employee.component';
import { CompanyFormComponent } from './components/company-form.component';

const routes: Routes = [{ path: '', component: CompanyFormComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddressFormModule,
    EmployeeFormModule,
    FormValueRendererModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CompanyFormComponent, AddEmployeeComponent],
  providers: [CompanyFormBuilderService],
})
export class CompanyFormModule {}
