import { MessagesComponent } from './messages/messages.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: '/chat',
      pathMatch: 'full'
    },
    {
        path: '',
        children: [
            {
                path: 'chat',
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
