import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../services/products.service';

@Pipe({
  name: 'sortProducts'
})
export class SortProductsPipe implements PipeTransform {

  transform(value: Product[] | null, sortType: string): Product[] | null {
    if(!value) {
      value;
    }
    if (sortType === 'ascending') {
      return (value as Product[]).sort((a: Product, b: Product) => {
        return (parseInt(a.price.substring(1) , 10) > parseInt(b.price.substring(1) , 10))? 1 : -1
      });
    }
    if (sortType === 'descending') {
      return (value as Product[]).sort((a: Product, b: Product) => {
        return (parseInt(a.price.substring(1) , 10) < parseInt(b.price.substring(1) , 10))? 1 : -1
      });
    }
    return value;
  }

}
