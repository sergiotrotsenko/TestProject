import {Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export type FieldItem = {
  name: string,
  active: boolean,
  selector?: string,
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit{
  @Input() fieldList: FieldItem[] = [];
  public defaultFieldList: FieldItem[] = [];
  public sortedFieldList: FieldItem[] = [];
  @Output() fieldListChange: EventEmitter<FieldItem[]> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
    console.log(this.fieldList);
    this.defaultFieldList = JSON.parse(JSON.stringify(this.fieldList));
    this.sortedFieldList = JSON.parse(JSON.stringify(this.fieldList));
  }

  public dropColumnList(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sortedFieldList, event.previousIndex, event.currentIndex);
    this.fieldListChange.emit(this.sortedFieldList);
  }

  public checkChange() {
    this.fieldListChange.emit(this.sortedFieldList);
  }

  public resetList() {
    console.log(this.fieldList);
    this.sortedFieldList = JSON.parse(JSON.stringify(this.defaultFieldList));
    this.fieldListChange.emit(this.sortedFieldList);
  }
}
