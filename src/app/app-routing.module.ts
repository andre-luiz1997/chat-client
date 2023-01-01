import { MessagesComponent } from './messages/messages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: '/chats',
      pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'chats',
                loadChildren: () =>
                    import('./chats/chats.module').then(
                        (m) => m.ChatsModule,
                    ),
            },
            {
                path: 'messages',
                loadChildren: () =>
                    import('./messages/messages.module').then(
                        (m) => m.MessagesModule,
                    ),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
