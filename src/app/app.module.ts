import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { VimeModule } from '@vime/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { SerachPipePipe } from './pipes/serach-pipe.pipe';
import { HarryComponent } from './harry/harry.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    SerachPipePipe,
    HarryComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
