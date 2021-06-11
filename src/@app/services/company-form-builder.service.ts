import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Company, Address, Employee } from '@app/models';

@Injectable({ providedIn: 'root' })
export class CompanyFormBuilderService {
  constructor(private fb: FormBuilder) {}

  generateForm(initial?: Company): FormGroup {
    return this.fb.group({
      name: [initial?.name, [Validators.required]],
      address: this.generateAddress(initial?.address),
      employees: this.fb.array(
        (initial?.employees || []).map((employee) => this.generateEmployee(employee)),
      ),
    });
  }

  private generateAddress(initial?: Address): FormGroup {
    return this.fb.group({
      country: [initial?.country, [Validators.required]],
      street: [initial?.street, [Validators.required]],
      zipCode: [initial?.zipCode],
    });
  }

  generateEmployee(initial?: Employee): FormGroup {
    return this.fb.group({
      name: [initial?.name, [Validators.required]],
      surname: [initial?.surname, [Validators.required]],
    });
  }
}
