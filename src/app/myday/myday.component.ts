import { OpenTaskDetailService } from './../services/open-task-detail.service';
import { Task } from './../models/task.model';
import { TasksServiceService } from './../services/tasks-service.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
	selector: 'app-myday',
	templateUrl: './myday.component.html',
	styleUrls: ['./myday.component.scss']
})
export class MydayComponent implements OnInit {
	taskInput: string;
	flag: boolean = false;
	taskInputObject: Task[] = [];

	openDetail: boolean = false;

	openTask: boolean = false;

	day: Date = new Date();

	focusOnStyles;
	focusOutStyles;
	openComplitedTasks;
	closeComplitedTasks;

	dayTasks: Task[] = [];

	myTask: Task ;


	tasks: Task[] = [];
	complitedTasks: string[] = [];


	@ViewChild('tasksInput') inputElement: ElementRef;
	@ViewChild('taskInputWrapper') taskInputWrapper: ElementRef;
	@ViewChild('addIcon') addIcon: ElementRef;
	@ViewChild('addIconWrapper') addIconWrapper: ElementRef;
	@ViewChild('complitedTasksWrapper') complitedTasksWrapper: ElementRef;
	@ViewChild('img') img: ElementRef;

	@ViewChild('taskDetailBox') taskDetailBox: ElementRef;

	inputFocus: boolean = false;

	constructor(private tasksService: TasksServiceService,
				private taskDetailService: OpenTaskDetailService		
		) {
		// this.tasks = tasksService.tasks;
		// this.dayTasks = tasksService.dayTasks;
		this.focusOnStyles = tasksService.focusService;
		this.focusOutStyles = tasksService.focusOutService;
		this.complitedTasks = tasksService.complitedTasks;
		this.openComplitedTasks = tasksService.openComplitedTasks;
		this.closeComplitedTasks = tasksService.closeComplitedTasks;



		// this.myTask = taskDetailService.task;
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

			this.tasks.push({ 
				text: this.taskInput,
				daily: true,
			});

			this.dayTasks.push({
				text: this.taskInput,
				daily: true,
			});

			this.taskInput = '';
		} else {
			this.focusOutStyles();
		}

		this.taskInputObject.push({
			text: this.taskInput,
			daily: true,
		})

	}


	addInComplitedTask(task, i) {
		this.dayTasks.splice(i, 1);
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

	openTaskDetail(task) {
		this.taskDetailService.task = task;

		this.openDetail = true;
		console.log(this.taskDetailService.task);
	}


}
