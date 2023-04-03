import {
  Component,
  Output,
  TemplateRef,
  ViewChild,
  EventEmitter
} from '@angular/core';
import { DropdownPanel } from './dropdown-panel';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent implements DropdownPanel {

  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @Output() closed = new EventEmitter<void>();

  constructor() {}

}
