import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { SerachPipePipe } from './pipes/serach-pipe.pipe';
import { HarryComponent } from './harry/harry.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    SerachPipePipe,
    HarryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
