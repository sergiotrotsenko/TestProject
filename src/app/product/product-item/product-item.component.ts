import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() selector: string;
  @Input() active: boolean = true;

}
