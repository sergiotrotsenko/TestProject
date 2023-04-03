import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddProductComponent} from './add-product/add-product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {HttpClientModule} from '@angular/common/http';
import { SortProductsPipe } from './pipes/sort-products.pipe';
import { SettingsComponent } from './settings/settings.component';
import {MaterialModule} from '../material/material.module';
import {CustomDropdownComponent} from './custom-dropdown/custom-dropdown.component';
import {CustomDropdownTriggerForDirective} from './custom-dropdown/custom-dropdown-trigger-for.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductItemComponent } from './product-item/product-item.component';
import {RouterLink} from '@angular/router';
import { SearchProductsPipe } from './pipes/search-products.pipe';



@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent,
    SortProductsPipe,
    SettingsComponent,
    CustomDropdownComponent,
    CustomDropdownTriggerForDirective,
    ProductItemComponent,
    SearchProductsPipe
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterLink
    ],
  exports: [
    SortProductsPipe,
    CustomDropdownComponent,
    CustomDropdownTriggerForDirective
  ]
})
export class ProductModule { }
