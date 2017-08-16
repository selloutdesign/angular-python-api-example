import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from  '@angular/router';
import { JsonpModule } from '@angular/http';
import {NgxPaginationModule} from 'ngx-pagination'; 


import { AppComponent } from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { JobService } from './job.service';

import { AppRoutingModule } from './app-routing.module';
import { JLoaderComponent } from './j-loader/j-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    JLoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    JsonpModule,
    NgxPaginationModule
  ],
  providers: [HeroService, JobService],
  bootstrap: [AppComponent]
})


export class AppModule { }
