import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CformComponent } from './cform/cform.component';
import { CcourseComponent } from './ccourse/ccourse.component';
import { FormsModule } from '@angular/forms';
import { ClistCoursesComponent } from './clist-courses/clist-courses.component';
import { CaboutComponent } from './cabout/cabout.component';
import { CdirectionComponent } from './cdirection/cdirection.component';

@NgModule({
  declarations: [
    AppComponent,
    CfooterComponent,
    CheaderComponent,
    CformComponent,
    CcourseComponent,
    ClistCoursesComponent,
    CaboutComponent,
    CdirectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
