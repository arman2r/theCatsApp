import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewsPageRoutingModule } from './views-routing.module';

import { ViewsPage } from './views.page';
import { CardComponent } from '../components/card/card.component';
import { ViewCatsComponent } from './view-cats/view-cats.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewsPageRoutingModule
  ],
  declarations: [ViewsPage, ViewCatsComponent, CardComponent],
  exports: [CardComponent]
})
export class ViewsPageModule {}
