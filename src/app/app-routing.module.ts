import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClistCoursesComponent } from './clist-courses/clist-courses.component';
import { CaboutComponent } from './cabout/cabout.component';
import { CdirectionComponent } from './cdirection/cdirection.component';
import { CformComponent } from './cform/cform.component';

const routes: Routes = [

  { path: 'clist-courses', component: ClistCoursesComponent},
  { path: 'cabout', component: CaboutComponent},
  { path: 'cdirection', component: CdirectionComponent},
  { path: 'cform', component: CformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
