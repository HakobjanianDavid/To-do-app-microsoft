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
	
	// То что ввёл пользователь в input
	taskInput: string;

	// флаг открытия и закрытия завершенных задач
	flag: boolean = false;

	// флаг открытия деатально задачи
	openDetail: boolean = false;

	// задача на которую кликнули для детального просмотра
	openedTask: Task;

	// сегодняшняя дата
	day: Date = new Date();
	timeCounter = Date.now();

	// функции из сервиса которые необходимо просмотреть
	focusToInput;
	inputBlur;
	openComplitedTasks;
	closeComplitedTasks;

	// массив всех задач
	tasks: Task[] = [];

	// массив дневных задач
	// dayTasks: Task[] = [];

	// массив выполненных задач
	complitedTasks: Task[] = [];


	@ViewChild('tasksInput') inputElement: ElementRef;
	@ViewChild('taskInputWrapper') taskInputWrapper: ElementRef;
	@ViewChild('addIcon') addIcon: ElementRef;
	@ViewChild('addIconWrapper') addIconWrapper: ElementRef;
	@ViewChild('complitedTasksWrapper') complitedTasksWrapper: ElementRef;
	@ViewChild('img') img: ElementRef;

	@ViewChild('taskDetailBox') taskDetailBox: ElementRef;

	constructor(private tasksService: TasksServiceService,
				private taskDetailService: OpenTaskDetailService		
		) {
		this.tasks = tasksService.tasks;
		this.complitedTasks = tasksService.complitedTasks;
		// this.dayTasks = tasksService.dayTasks;

		this.focusToInput = tasksService.focusService;
		this.inputBlur = tasksService.focusOutService;

		this.openComplitedTasks = tasksService.openComplitedTasks;
		this.closeComplitedTasks = tasksService.closeComplitedTasks;
	}

	ngOnInit(): void {
		setInterval((el) => {
			this.timeCounter = Date.now();
		}, 1)
	}

	addTask() {
		/* если поле заполнено то добавляем в массив задач новую задачу,
		   а если поле не заполнено то уводим фокус от инпута 	
		*/
		if (this.taskInput) {
			
			this.inputBlur()

			this.tasks.push({ 
				text: this.taskInput,
				daily: true,
				complited: false
			});

			// this.dayTasks.push({
			// 	text: this.taskInput,
			// 	daily: true,
			// 	complited: false
			// })

			this.taskInput = '';
		} else {
			this.inputBlur();			
		}
	}


	addInComplitedTask(task, i) {
		task.complited = true;
		this.tasks.splice(i, 1);
		// this.dayTasks.splice(i, 1);
		this.complitedTasks.unshift(task);
	}

	removeFromComplited(task, i) {
		task.complited = false;
		this.complitedTasks.splice(i, 1);
		this.tasks.push(task);
		// this.dayTasks.push(task);
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
		this.openDetail = true;
		this.openedTask = task;
	}
}
