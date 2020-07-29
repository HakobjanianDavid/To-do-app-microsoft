import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  
  constructor() { }

  @ViewChild("searchField", {static: false})
  searchField: ElementRef;
  
  ngOnInit(): void {
  }


  focusToInput(target) {
    if( !target.classList.contains('closeIconWrapper') && !target.classList.contains('closeIcon')
    ) {
      this.searchField.nativeElement.focus();
    }
  }
}
