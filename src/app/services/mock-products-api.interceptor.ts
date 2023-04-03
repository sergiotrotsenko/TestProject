import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import mockResponse from 'src/app/services/mock-products.json';
import {Product} from './products.service';
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class MockProductsAPIInterceptor implements HttpInterceptor {

  constructor(private localStorage: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const {url, method, body} = request;
    console.log(url);
    if (url.endsWith('/products') && method === 'GET') {
      console.log('/products GET intercepted');
      let products = this.localStorage.getItem('products')
      if (products) {
        console.log(products);
        return of(new HttpResponse({status: 200, body: products}))
      }
      return of(new HttpResponse({status: 200, body: mockResponse}))
    }
    if (url.endsWith('/products') && method === 'POST') {
      console.log('/products POST intercepted');
      console.log(body);
      const product = {...(body as Product)};
      const newProduct = {
        id: new Date().getTime().toString(),
        ...product
      }
      mockResponse.data.push(newProduct);
      this.localStorage.setItem('products', mockResponse);
      return of(new HttpResponse({status: 200, body: newProduct}))
    }
    if (url.match('/products') && method === 'DELETE') {
      console.log('/products DELETE intercepted');
      console.log(body);
      const urlValues = url.split('/');
      const ids = urlValues[urlValues.length-1].split(',');
      // const products = (body as Product[]);
      // let ids = products.map((el: Product) => el.id);
      mockResponse.data = mockResponse.data.filter((el: Product) => ids.indexOf(el.id) === -1);
      this.localStorage.setItem('products', mockResponse);
      return of(new HttpResponse({status: 200, body: mockResponse}))
    }
    return next.handle(request);
  }
}

export let MockProductsProvider = {
  provide: HTTP_INTERCEPTORS,
  // add use factory and environment param
  useClass: MockProductsAPIInterceptor,
  multi: true
}
