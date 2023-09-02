import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '@demo-angular-ngrx/users/domain';

@Pipe({
  name: 'transformAddress',
  standalone: true,
})
export class TransformAddressPipe implements PipeTransform {
  transform(address: Address): string {
    return address.suite+", "+address.street+", "+address.city+", "+address.zipcode;
  }
}
