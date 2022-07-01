import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleChatsPageRoutingModule } from './detalle-chats-routing.module';

import { DetalleChatsPage } from './detalle-chats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleChatsPageRoutingModule
  ],
  declarations: [DetalleChatsPage]
})
export class DetalleChatsPageModule {}
