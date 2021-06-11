import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { Country } from '@app/models';
import { CountryService } from '@app/services/country.service';
import { parentFormGroupProvider } from '@app/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [parentFormGroupProvider],
})
export class AddressFormComponent {
  readonly countries: Observable<Array<Country>> = this.countryService.getAll();

  readonly trackById: TrackByFunction<Country> = (_, country: Country): number => country.id;

  constructor(private countryService: CountryService) {}
}
