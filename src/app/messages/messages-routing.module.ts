import { MessagesComponent } from './messages.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: MessagesComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule {}
