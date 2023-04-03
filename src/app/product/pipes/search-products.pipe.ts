import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../services/products.service';

@Pipe({
  name: 'searchProducts'
})
export class SearchProductsPipe implements PipeTransform {

  transform<T>(products: T[], searchString: string, key: string): T[] {
    if (!products || !searchString) {
      return products;
    }
    return products.filter(it =>  it[key].toLowerCase().includes(searchString.toLowerCase()));
  }

}
