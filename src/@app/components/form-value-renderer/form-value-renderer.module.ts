import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormValueRendererComponent } from './form-value-renderer.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormValueRendererComponent],
  declarations: [FormValueRendererComponent],
})
export class FormValueRendererModule {}
