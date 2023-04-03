import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, of} from 'rxjs';

const productResp = {
  "data": [{
          "fullName": "Apple iPhone 4S",
          "shortName": "iPhone 4S",
          "imageUrl": "http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-white-black-e1347715004972.jpeg",
          "price": "$400",
          "postedDate": "1519211809934"
      },
      {
          "fullName": "Apple iPhone 5",
          "shortName": "iPhone 5",
          "imageUrl": "http://cdn.iphonehacks.com/wp-content/uploads/2012/09/iphone5-white-black-e1347715004972.jpeg",
          "price": "$500",
          "postedDate": "1519211809934"

      },
      {
          "fullName": "Apple iPhone 5S",
          "shortName": "iPhone 5S",
          "imageUrl": "http://img1.digitalversus.com/produits/71/17049/apple-iphone-5s_1378837974.jpg",
          "price": "$600",
          "postedDate": "1519211809934"
      },
      {
          "fullName": "Apple iPhone 5C",
          "shortName": "iPhone 5C",
          "imageUrl": "http://img1.digitalversus.com/produits/71/16881/apple-iphone-5c_1378838033.jpg",
          "price": "$550",
          "postedDate": "1519211809934"
      },
      {
          "fullName": "Google Nexus 4",
          "shortName": "Nexus 4",
          "imageUrl": "http://img1.digitalversus.com/produits/35/14656/lg-nexus-4_1351531899.jpg",
          "price": "$300",
          "postedDate": "1519211809934"
      },
      {
          "fullName": "Google Nexus 5",
          "shortName": "Nexus 5",
          "imageUrl": "http://img.zap.co.il/pics/4/0/5/4/38684504c.gif",
          "price": "$400",
          "postedDate": "1519211809934"
      },
      {
          "fullName": "Google Nexus 7",
          "shortName": "Nexus 7",
          "imageUrl": "http://3.bp.blogspot.com/-SamPHdMoJJE/UJb39-Ynm9I/AAAAAAAABeM/niBRBFcf9Ss/s400/Asus%2BGoogle%2BNexus%2B7%2BCellular%2BManual%2BGuide.jpg",
          "price": "$150",
          "postedDate": "1519211809934"
      },
      {
          "fullName": "Google Nexus 7 2013",
          "shortName": "Nexus 7 2013",
          "imageUrl": "http://img1.digitalversus.com/produits/474/15463/google-nexus-7-full-hd_1376645837.jpg",
          "price": "$200",
          "postedDate": "1519211809934"
      },
      {
          "fullName": "Samsung Galaxy S5",
          "shortName": "Galaxy S5",
          "imageUrl": "http://img1.digitalversus.com/news/34/34079/samsung-galaxy-s5_1bc0dcb3dd2e87e8.jpg",
          "price": "$600",
          "postedDate": "1519211809934"
      },
      {
          "fullName": "Samsung Galaxy S4",
          "shortName": "Galaxy S4",
          "imageUrl": "http://www.noteburner.com/images-new/guide/reviews/galaxy-s4/samsung-galaxy-s4.jpg",
          "price": "$500",
          "postedDate": "1519211809934"
      }
  ]
}

export type Product = {
  id?: string
  fullName: string,
  shortName: string,
  imageUrl: string,
  price: string,
  postedDate: string,
  checked?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get('/products').pipe(
      map((resp: {data: any[]}) => resp.data)
    )
    return of<Product[]>(productResp.data);
  }

  addProduct(product: Product) {
    // productResp.data.push(product);
    return this.http.post('/products', product);
  }
  deleteProduct(products: Product[]) {
    let ids = products.map((el: Product) => el.id);
    // productResp.data = productResp.data.filter((el: Product) => ids.indexOf(el.id) === -1);

    return this.http.delete(`/products/${ids.toString()}`).pipe(
      map((resp: {data: any[]}) => resp.data)
    )
  }

}
