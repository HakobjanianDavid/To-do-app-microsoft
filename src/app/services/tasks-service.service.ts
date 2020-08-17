import { Injectable, ElementRef } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class TasksServiceService {

	tasks: string [] = ['sas'];

	dayTasks: string [] = [];
	plannedTasks: string [] = [];
	importantTasks: string [] = [];

	complitedTasks: string [] = [];
	searchTasks: string [] = [];
 
	allTasks: {} [] = [
		{
			text: 'sas',
			daily: true,
		}
	]

	value;

	inputElement: ElementRef;
	taskInputWrapper: ElementRef;
	addIcon: ElementRef;
	complitedTasksWrapper: ElementRef;
	img: ElementRef;


	testTasks: {}[] = [];

	constructor() {
	}

	focusService() {
		this.inputElement.nativeElement.focus();
		this.inputElement.nativeElement.classList.add('otherColorPlaceholder');
		this.taskInputWrapper.nativeElement.style.borderBottom = '1.1px solid rgb(67,109,228)';
		this.addIcon.nativeElement.src = '../../assets/images/closeSearchIcon.svg';
	}

	focusOutService() {
		this.addIcon.nativeElement.src = '../../assets/images/leftBarSide/plusIcon.svg';

		this.taskInputWrapper.nativeElement.style.borderBottom = '1.1px solid rgb(240,240,240)';
		this.inputElement.nativeElement.classList.remove('otherColorPlaceholder')

		this.inputElement.nativeElement.blur();
	}

	openComplitedTasks() {
		this.complitedTasksWrapper.nativeElement.style.overflow = 'initial';
		this.img.nativeElement.classList.add('screwArrowDown');
	}

	closeComplitedTasks() {
		this.complitedTasksWrapper.nativeElement.style.overflow = 'hidden';
		this.img.nativeElement.classList.remove('screwArrowDown');
	}
}
