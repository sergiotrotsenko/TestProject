import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{

  public productForm: FormGroup;

  get fullName() {
    return this.productForm.get('fullName');
  }
  get shortName() {
    return this.productForm.get('shortName');
  }
  get imageUrl() {
    return this.productForm.get('imageUrl');
  }
  get price() {
    return this.productForm.get('price');
  }
  get postedDate() {
    return this.productForm.get('postedDate');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private productsService: ProductsService
    ) {

  }

  ngOnInit() {
    this.productForm = this.fb.group({
      fullName: ['', Validators.required],
      shortName: [''],
      imageUrl: ['',Validators.required],
      price: ['',[Validators.required, Validators.pattern(/^[0-9]*$/)]],
      postedDate: ['',Validators.required]
    })
  }

  onSubmit() {
    this.productForm.markAllAsTouched();
    console.log(this.productForm);
    if (this.productForm.valid) {
      // add date validation
      // add price validation
      const data = {
        ...this.productForm.value,
        postedDate: new Date(this.postedDate.value).getTime(),
        price: `$${this.price.value}`
      }
      this.productsService.addProduct(data).subscribe(
        data => {
          this.back();
        }
      );
    }

  }
  back() {
    this.router.navigate(['/']);
  }

}
