import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@Injectable()
export class ChatSocket extends Socket {
    constructor() {
        super({
            url: `${environment.server}`,
            options: {
                autoConnect: false,
            },
        });
    }
}

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule.forRoot([]), AppRoutingModule],
    bootstrap: [AppComponent],
    exports: [RouterModule],
    providers: [ChatSocket],
})
export class AppModule {}
