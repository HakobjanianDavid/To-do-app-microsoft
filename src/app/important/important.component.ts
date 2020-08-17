import { TasksServiceService } from './../services/tasks-service.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-important',
	templateUrl: './important.component.html',
	styleUrls: ['./important.component.scss']
})
export class ImportantComponent implements OnInit {

	taskInput: string;
	flag: boolean = false;

	day: Date = new Date();

	focusOnStyles;
	focusOutStyles;
	openComplitedTasks;
	closeComplitedTasks;

	importantTasks: string[] = [];
	tasks: string[] = [];
	complitedTasks: string[] = [];

	@ViewChild('tasksInput') inputElement: ElementRef;
	@ViewChild('taskInputWrapper') taskInputWrapper: ElementRef;
	@ViewChild('addIcon') addIcon: ElementRef;
	@ViewChild('addIconWrapper') addIconWrapper: ElementRef;
	@ViewChild('complitedTasksWrapper') complitedTasksWrapper: ElementRef;
	@ViewChild('img') img: ElementRef;
	@ViewChild('importantTaskText') importantTaskText: ElementRef;

	inputFocus: boolean = false;

	constructor(private tasksService: TasksServiceService) {
		this.tasks = tasksService.tasks;
		this.importantTasks = tasksService.importantTasks;
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
			this.importantTasks.push(this.taskInput);
			this.taskInput = '';
		} else {
			this.focusOutStyles();
		}

	}


	addInComplitedTask(task, i) {
		this.importantTasks.splice(i, 1);
		this.complitedTasks.unshift(task);
	}

	complitedTasksAppearance() {
		if (!this.flag) {
			this.openComplitedTasks();
			this.flag = !this.flag;
		} else {
			this.closeComplitedTasks();
			this.flag = !this.flag;
		}

	}
}
