import { TasksServiceService } from './../services/tasks-service.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
@Component({
	selector: 'app-inbox',
	templateUrl: './inbox.component.html',
	styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

	taskInput: string;
	flag: boolean = false;

	focusOnStyles;
	focusOutStyles;

	tasks: string[] = [];

	@ViewChild('tasksInput') inputElement: ElementRef;
	@ViewChild('taskInputWrapper') taskInputWrapper: ElementRef;
	@ViewChild('addIcon') addIcon: ElementRef;
	@ViewChild('addIconWrapper') addIconWrapper: ElementRef;


	inputFocus: boolean = false;

	constructor(private tasksService: TasksServiceService) {
		this.tasks = tasksService.tasks;
		this.focusOnStyles = tasksService.focusService;
		this.focusOutStyles = tasksService.focusOutService;
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
			this.taskInput = '';
		} else {
			this.focusOutStyles();
		}
	}
}
