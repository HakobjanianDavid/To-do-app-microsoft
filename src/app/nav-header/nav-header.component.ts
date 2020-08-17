import { TasksServiceService } from './../services/tasks-service.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  tasks: string[] = [];
  searchedTasks = [];
  value: string = '';

  constructor(private tasksService: TasksServiceService) { 
    this.tasks = tasksService.tasks;
    this.searchedTasks = tasksService.searchTasks;
  }
  
  // @ViewChild("searchField", {static: false})
  // searchField: ElementRef;
  
  ngOnInit(): void {
  }
  
  searchTasks(inputTask) {

    this.searchedTasks = this.tasks.filter(el => {
      return el.includes(inputTask);
    })

    this.tasksService.searchTasks = this.searchedTasks;

    console.log(this.tasksService.searchTasks);
    
  }
}
