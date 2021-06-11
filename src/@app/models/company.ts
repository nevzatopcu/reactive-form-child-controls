import { Address } from './address';
import { Employee } from './employee';

export interface Company {
  name: string;
  address: Address;
  employees: Array<Employee>;
}
