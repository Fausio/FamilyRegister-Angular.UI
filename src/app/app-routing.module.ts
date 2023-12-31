import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyPaginationComponent } from './components/family/family-pagination/family-pagination.component';
import { FamilyAddComponent } from './components/family/family-add/family-add.component';
import { FamilyEditComponent } from './components/family/family-edit/family-edit.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyPaginationComponent
  },
  {
    path: 'family-pagination',
    component: FamilyPaginationComponent
  },
  {
    path: 'family-add',
    component: FamilyAddComponent
  },
  {
    path: 'family-edit/:id',
    component: FamilyEditComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
