import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydayComponent } from './myday.component';

describe('MydayComponent', () => {
  let component: MydayComponent;
  let fixture: ComponentFixture<MydayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
