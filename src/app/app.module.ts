import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyPaginationComponent } from './components/family/family-pagination/family-pagination.component';
import { HttpClientModule } from '@angular/common/http';
import { FamilyAddComponent } from './components/family/family-add/family-add.component';
import { FamilyEditComponent } from './components/family/family-edit/family-edit.component';
import { FormsModule } from '@angular/forms';

 

@NgModule({
  declarations: [
    AppComponent,
    FamilyPaginationComponent,
    FamilyAddComponent,
    FamilyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
