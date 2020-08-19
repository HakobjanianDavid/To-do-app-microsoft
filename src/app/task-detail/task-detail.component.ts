import { OpenTaskDetailService } from './../services/open-task-detail.service';
import { Task } from './../models/task.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  // @Input() taskInputObject;

  myTask;
  
  
  @ViewChild('input') input: ElementRef;

  constructor( private taskDetailService: OpenTaskDetailService) { 
    this.myTask = taskDetailService.task;
  }

  ngOnInit(): void {
    // console.log(this.myTask);
  }

  lookObject() {
    console.log(this.myTask);
  }

  blur() {
    console.log(this.myTask);
  }
}
