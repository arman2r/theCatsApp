import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewsPage } from './views.page';
import { ViewCatsComponent } from './view-cats/view-cats.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'viewCats',
    pathMatch: 'full'
  },
  {
    path: 'viewCats',
    component: ViewCatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewsPageRoutingModule {}
