import { TasksServiceService } from './../services/tasks-service.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'app-myday',
	templateUrl: './myday.component.html',
	styleUrls: ['./myday.component.scss']
})
export class MydayComponent implements OnInit {
	taskInput: string;
	flag: boolean = false;

	day: Date = new Date();

	focusOnStyles;
	focusOutStyles;

	dayTasks: string[] = [];
	complitedTasks: string[] = [];

	@ViewChild('tasksInput') inputElement: ElementRef;
	@ViewChild('taskInputWrapper') taskInputWrapper: ElementRef;
	@ViewChild('addIcon') addIcon: ElementRef;
	@ViewChild('addIconWrapper') addIconWrapper: ElementRef;
	@ViewChild('complitedTasksWrapper') complitedTasksWrapper: ElementRef;
	@ViewChild('img') img: ElementRef;

	inputFocus: boolean = false;

	constructor(private tasksService: TasksServiceService) {
		this.dayTasks = tasksService.dayTasks;
		this.focusOnStyles = tasksService.focusService;
		this.focusOutStyles = tasksService.focusOutService;
		this.complitedTasks = tasksService.complitedTasks;
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

			this.dayTasks.push(this.taskInput);
			this.taskInput = '';
		} else {
			this.focusOutStyles();
		}
	}


	addInComplitedTask(task, i) {
		this.dayTasks.splice(i, 1);
		this.complitedTasks.unshift(task);
	}

	openComplitedTask() {
		if(!this.flag) {
			this.complitedTasksWrapper.nativeElement.style.overflow = 'initial';
			this.img.nativeElement.classList.add('screwArrowDown');
			this.flag = !this.flag;
		} else {
			this.complitedTasksWrapper.nativeElement.style.overflow = 'hidden';
			this.img.nativeElement.classList.remove('screwArrowDown');
			this.flag = !this.flag;
		}
	}
}
