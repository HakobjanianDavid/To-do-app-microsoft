import { Injectable, ElementRef } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class TasksServiceService {

	tasks: string[] = [];
	dayTasks: string[] = [];
	complitedTasks: string[] = ['1'];

	inputElement: ElementRef;
	taskInputWrapper: ElementRef;
	addIcon: ElementRef;

	constructor() { }

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
}
