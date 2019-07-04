import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TelescopeCreateUpdatePage } from './telescope-create-update.page';

const routes: Routes = [
  {
    path: '',
    component: TelescopeCreateUpdatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TelescopeCreateUpdatePage]
})
export class TelescopeCreateUpdatePageModule {}
