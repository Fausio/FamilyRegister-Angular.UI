import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyPaginationComponent } from './components/family/family-pagination/family-pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { FamilyAddComponent } from './components/family/family-add/family-add.component';

 

@NgModule({
  declarations: [
    AppComponent,
    FamilyPaginationComponent,
    FamilyAddComponent
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
