import { InboxComponent } from './inbox/inbox.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TasksComponent } from './tasks/tasks.component';
import { AssignedToMeComponent } from './assigned-to-me/assigned-to-me.component';
import { PlannedComponent } from './planned/planned.component';
import { ImportantComponent } from './important/important.component';
import { MydayComponent } from './myday/myday.component';

const route: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'tasks/inbox'
  },
  {
    path: 'tasks/inbox',
    component: InboxComponent
  },
  {
    path: 'tasks/assigned_to_me',
    component: AssignedToMeComponent
  },
  {
    path: 'tasks/planned',
    component: PlannedComponent
  },
  {
    path: 'tasks/importanat',
    component: ImportantComponent
  },
  {
    path: 'tasks/myday',
    component: MydayComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavHeaderComponent,
    MainContentComponent,
    LeftMenuComponent,
    TasksComponent,
    AssignedToMeComponent,
    PlannedComponent,
    ImportantComponent,
    MydayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
