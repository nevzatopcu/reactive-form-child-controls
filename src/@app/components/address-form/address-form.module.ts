import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from './address-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [AddressFormComponent],
  declarations: [AddressFormComponent],
  // providers: [CountryService]
})
export class AddressFormModule {}
