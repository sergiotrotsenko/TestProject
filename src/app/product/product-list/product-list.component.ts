import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Product, ProductsService} from '../../services/products.service';
import {Observable} from 'rxjs';
import {FieldItem} from '../settings/settings.component';
import {Router} from '@angular/router';

enum PriceSortEnum {
  ascending = 'ascending',
  descending = 'descending'
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  public products$: Observable<Product[]> = new Observable<Product[]>();
  public priceSort = '';
  public get PriceSortEnum() {
    return PriceSortEnum
  }

  public readonly defaultFieldList: FieldItem[] = [
    {
      name: 'Name',
      selector: 'product-name',
      active: true
    },
    {
      name: 'Short Name',
      selector: 'product-short-name',
      active: true
    },
    {
      name: 'Image',
      selector: 'product-image',
      active: true
    },
    {
      name: 'Price',
      selector: 'product-price',
      active: true
    },
    {
      name: 'Post Date',
      selector: 'product-post-date',
      active: true
    }
  ];
  public fieldList: FieldItem[] = [];
  public allChecked: boolean = false;
  public searchText: string = '';
  public products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router: Router
    ) {
  }

  ngOnInit() {
    this.fieldList = [...this.defaultFieldList];
    // add component store
    this.products$ = this.productsService.getProducts();
    this.products$.subscribe(
      data => {
        this.products = data;
      }
    )
  }

  public setAllProductsChecked(evt) {
    this.products.forEach(product => {
      product.checked = evt;
    })

  }

  public deleteItems() {
    const checkedProducts = this.products.filter(p => p.checked);
    this.productsService.deleteProduct(checkedProducts).subscribe(
      data => {
        console.log(data);
        this.products = data;
      }
    );
  }

  public changeList(list: FieldItem[]) {
    this.fieldList = list;
  }

}
