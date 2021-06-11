import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { parentFormGroupProvider } from '@app/utils';

@Component({
  selector: 'employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [parentFormGroupProvider],
})
export class EmployeeFormComponent {
  @Input() identifier: number | string | null = 1;
}
