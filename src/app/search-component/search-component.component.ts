import { TasksServiceService } from './../services/tasks-service.service';
import { Component, OnInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.scss']
})
export class SearchComponentComponent implements OnInit {

  search: string[] = [];
  allTasks;
  value: string = '';
  constructor(private taskServise: TasksServiceService) {
    this.allTasks = taskServise.allTasks;
    // this.search = taskServise.searchTasks;
    console.log(this.search, taskServise.searchTasks)
  }

  @ViewChild("searchField", { static: false })
  searchField: ElementRef;

  ngOnInit(): void {

  }


  searchTasks(inputValue) {
    // Удаляем результаты предыдущего поиска
    this.search.splice(0, this.search.length);

    // Проводим поиск по совпадениям
    const search = this.allTasks.filter((el) => {
      return el.text.includes(inputValue);
    })

    // Проверяем 
    if (inputValue) {
      search.forEach(el => {
        this.search.push(el.text);
      })
    } else {
      this.search.splice(0, this.search.length);
    }
  }

  focusToInput(target) {
    if (!target.classList.contains('closeIconWrapper') && !target.classList.contains('closeIcon')
    ) {
      this.searchField.nativeElement.focus();
    }
  }
}
