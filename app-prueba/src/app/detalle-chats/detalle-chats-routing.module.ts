import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleChatsPage } from './detalle-chats.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleChatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleChatsPageRoutingModule {}
