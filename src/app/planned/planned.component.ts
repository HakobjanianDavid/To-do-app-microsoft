import { TasksServiceService } from './../services/tasks-service.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-planned',
  templateUrl: './planned.component.html',
  styleUrls: ['./planned.component.scss']
})
export class PlannedComponent implements OnInit {
	taskInput: string;
	flag: boolean = false;

	day: Date = new Date();

	focusOnStyles;
	focusOutStyles;
	openComplitedTasks;
	closeComplitedTasks;

	plannedTasks: string[] = [];
	tasks: string[] = [];
	complitedTasks: string[] = [];

	@ViewChild('tasksInput') inputElement: ElementRef;
	@ViewChild('taskInputWrapper') taskInputWrapper: ElementRef;
	@ViewChild('addIcon') addIcon: ElementRef;
	@ViewChild('addIconWrapper') addIconWrapper: ElementRef;
	@ViewChild('complitedTasksWrapper') complitedTasksWrapper: ElementRef;
	@ViewChild('img') img: ElementRef;

	inputFocus: boolean = false;

	constructor(private tasksService: TasksServiceService) {
		this.tasks = tasksService.tasks;
		this.plannedTasks = tasksService.plannedTasks;
		this.focusOnStyles = tasksService.focusService;
		this.focusOutStyles = tasksService.focusOutService;
		this.complitedTasks = tasksService.complitedTasks;
		this.openComplitedTasks = tasksService.openComplitedTasks;
		this.closeComplitedTasks = tasksService.closeComplitedTasks;
	}

	ngOnInit(): void {
	}

	focusToInput(event) {
		if (event.target === this.addIconWrapper.nativeElement || event.target === this.addIcon.nativeElement) {

			if (this.addIcon.nativeElement.src === 'http://localhost:4200/assets/images/leftBarSide/plusIcon.svg') {
				this.focusOnStyles();
			}
			else {
				if (this.inputElement) {
					this.addTask();
				} else {
					this.focusOutStyles();
				}
			}
		} else {
			this.focusOnStyles();
		}
	}

	addTask() {
		if (this.taskInput) {
			this.focusOutStyles()

			this.tasks.push(this.taskInput);
			this.plannedTasks.push(this.taskInput);
			this.taskInput = '';
		} else {
			this.focusOutStyles();
		}
	}


	addInComplitedTask(task, i) {
		this.plannedTasks.splice(i, 1);
		this.complitedTasks.unshift(task);
	}

	complitedTasksAppearance() {
		if(!this.flag) {
			this.openComplitedTasks();
			this.flag = !this.flag;
		} else {
			this.closeComplitedTasks();
			this.flag = !this.flag;
		}
	}
}
