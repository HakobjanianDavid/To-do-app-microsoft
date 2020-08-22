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
  notificationTurn: boolean = false;
  deadLineTurn: boolean = false;
  time: Date;

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

  openNotification() {
    if(this.deadLineTurn) {
      this.deadLineTurn = false;
    }

    this.notificationTurn = !this.notificationTurn;
  }
  
  afterHour() {
    this.myTask.reminder = Date.now() + 3600000;
    this.myTask.reminderNote = new Date(this.myTask.reminder);
  }

  getTomorrow() {
    const dayInMS = 86400000;
    this.myTask.reminder = Date.now() + dayInMS;
    this.myTask.reminderNote = new Date(this.myTask.reminder);
  }

  getNextWeek() {
    const weekInMS = 86400000 * 7;
    this.myTask.reminder = Date.now() + weekInMS;
    this.myTask.reminderNote = new Date(this.myTask.reminder);
  }

  openDeadLineBlock() {
    if(this.notificationTurn) {
      this.notificationTurn = false;
    }

    this.deadLineTurn = !this.deadLineTurn;
  }

  setDeadlineToday() {
    this.myTask.deadLine = Date.now();
    this.myTask.deadlineNote = 'сегодня';
  }

  setDeadlineTomorrow() {
    const dayInMS = 86400000;
    this.myTask.deadLine = Date.now() + dayInMS;
    this.myTask.deadlineNote = 'завтра';
  }

  setDeadlineNextWeek() {
    const weekInMS = 86400000 * 7;
    this.myTask.deadLine = Date.now() + weekInMS;
    this.myTask.deadlineNote = 'следющая неделя';
  }

}
