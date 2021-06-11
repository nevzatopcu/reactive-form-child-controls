import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { CompanyFormBuilderService } from '@app/services';

@Component({
  selector: 'company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyFormComponent {
  formGroup: FormGroup = this.formBuilderService.generateForm();

  constructor(private formBuilderService: CompanyFormBuilderService) {}

  get employees(): FormArray {
    return this.formGroup.get('employees') as FormArray;
  }
}
