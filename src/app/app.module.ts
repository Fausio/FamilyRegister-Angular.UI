import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyPaginationComponent } from './components/family/family-pagination/family-pagination.component';
import { HttpClientModule } from '@angular/common/http';

 

@NgModule({
  declarations: [
    AppComponent,
    FamilyPaginationComponent
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
