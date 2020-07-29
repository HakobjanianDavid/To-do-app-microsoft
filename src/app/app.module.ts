import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TasksComponent } from './tasks/tasks.component';

const route: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavHeaderComponent,
    MainContentComponent,
    LeftMenuComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
