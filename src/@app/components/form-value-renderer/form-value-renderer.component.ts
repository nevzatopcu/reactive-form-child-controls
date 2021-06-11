import { Component, Inject, OnInit, Optional, SkipSelf } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';
import { OBSERVE_PROVIDER, OBSERVE, ObserveFn, Observed } from 'ng-observe';

@Component({
  selector: 'form-value-renderer',
  template: `
    <p>
      {{ formValue?.value | json }}
    </p>
  `,
  styleUrls: ['./form-value-renderer.component.css'],
  providers: [OBSERVE_PROVIDER],
})
export class FormValueRendererComponent implements OnInit {
  private formGroup: FormGroup | null = null;
  formValue: Observed<any, any> | null = null;

  constructor(
    @SkipSelf()
    @Optional()
    private container: ControlContainer,
    @Inject(OBSERVE) private observe: ObserveFn,
  ) {}

  ngOnInit() {
    this.formGroup = this.container.control as FormGroup;
    this.formValue = this.observe(this.formGroup.valueChanges);
  }
}
