
import { JsonMenuPage } from './../pages/json-menu/json-menu';
import { GMapPage } from './../pages/g-map/g-map';
import { BarcodeScannerPageModule } from './../pages/barcode-scanner/barcode-scanner.module';
import { BarcodeScannerPage } from './../pages/barcode-scanner/barcode-scanner';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SocialInfoPage } from '../pages/social-info/social-info';
import { SMS } from '@ionic-native/sms'; // import plugin SMS
import { BarcodeScanner } from '@ionic-native/barcode-scanner';  // import plugin BarcodeScanner
import { Geolocation } from '@ionic-native/geolocation';  // import plugin geolocation
import { HttpClientModule } from '@angular/common/http'   // import JASON Array 
import { TvOnTheAirPage } from '../pages/tv-on-the-air/tv-on-the-air';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SocialInfoPage,
    BarcodeScannerPage,
    GMapPage,
    JsonMenuPage,
    TvOnTheAirPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,           // add JSON Array
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SocialInfoPage,
    BarcodeScannerPage,
    GMapPage,
    JsonMenuPage,
    TvOnTheAirPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SMS, // เพิ่ม เพื่อให้เรียกใชฟังชั่น SMS
    BarcodeScanner,  // เพิ่ม เพื่อให้เรียกใชฟังชั่น BarcodeScanner
    Geolocation, // เพิ่ม เพื่อให้เรียกใชฟังชั่น Geolocation
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
