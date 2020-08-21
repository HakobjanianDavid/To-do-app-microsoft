import { OpenTaskDetailService } from './../services/open-task-detail.service';
import { Task } from './../models/task.model';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  @Input() myTask: Task;
  
  
  @ViewChild('input') input: ElementRef;

  constructor( private taskDetailService: OpenTaskDetailService) { 
    // this.myTask = taskDetailService.task;
  }

  ngOnInit(): void {
    // console.log(this.myTask);
  }

  addToDailyTasks() {
    // this.myTask.looked = 'добавлено'
    this.myTask.daily = true;
    console.log(this.myTask);
  }

  deleteFromDailyTasks() {
    this.myTask.daily = false;
    console.log(this.myTask);
  }

  setReminder() {
    this.myTask.reminder = Date.now() + 1000;
    let day = Date.now();
  }

  blur() {
    console.log(this.myTask.reminder);
  }
}
