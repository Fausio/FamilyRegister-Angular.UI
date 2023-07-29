import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyPaginationComponent } from './components/family/family-pagination/family-pagination.component';

const routes: Routes = [
  {
    path: '',
    component: FamilyPaginationComponent
  },
  {
    path: 'family-pagination',
    component: FamilyPaginationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
