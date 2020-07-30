import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  flag = false;
  @Input() changeWidth = false;

  constructor() { }

  ngOnInit(): void {
  }

  changeSize(element) {
    if(!this.flag) {
      this.changeWidth = true;
      this.flag = !this.flag;
    } else {

      if(element.classList.contains('openMenuWrapper')
        || element.classList.contains('openMenuImg')) {
        this.changeWidth = false;
        this.flag = !this.flag;
      }
    }
  }

}
