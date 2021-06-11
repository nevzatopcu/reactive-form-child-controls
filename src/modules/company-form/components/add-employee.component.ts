import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlContainer, FormArray, FormGroup } from '@angular/forms';
import { CompanyFormBuilderService } from '@app/services';

@Component({
  selector: 'add-employee',
  template: `
    <button class="btn btn-primary" type="button" (click)="addEmployee()">Employee +</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeeComponent {
  constructor(
    private controlContainer: ControlContainer,
    private formService: CompanyFormBuilderService,
  ) {}

  addEmployee(): void {
    this.employees.push(this.formService.generateEmployee());
  }

  private get employees(): FormArray {
    return this.formGroup.get('employees') as FormArray;
  }

  private get formGroup(): FormGroup {
    return this.controlContainer.control as FormGroup;
  }
}
