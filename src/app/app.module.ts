import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { IonicStorageModule } from '@ionic/storage-angular';
const config: SocketIoConfig = { url: 'https://grape-alder-page.glitch.me', options: {} };



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),IonicStorageModule.forRoot(), SocketIoModule.forRoot(config),AppRoutingModule ,QRCodeModule, ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }   ],
  bootstrap: [AppComponent],
})
export class AppModule {}
