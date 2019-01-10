import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvOnTheAirPage } from './tv-on-the-air';

@NgModule({
  declarations: [
    TvOnTheAirPage,
  ],
  imports: [
    IonicPageModule.forChild(TvOnTheAirPage),
  ],
})
export class TvOnTheAirPageModule {}
