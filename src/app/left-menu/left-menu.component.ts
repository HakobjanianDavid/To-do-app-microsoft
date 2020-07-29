import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  @Output() changeMenuSize: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  @ViewChild('addNewListInput') addNewListInput: ElementRef;
  ngOnInit(): void {
  }

  openLeftMenu(target) {
    this.changeMenuSize.emit(target);
    
    if(target.classList.contains('iconsWrapper') || target.classList.contains('plusIcon')) {
      this.addNewListInput.nativeElement.focus();
    }
  }

  addNewList(event) {

  }

}
