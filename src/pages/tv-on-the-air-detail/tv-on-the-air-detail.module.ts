import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvOnTheAirDetailPage } from './tv-on-the-air-detail';

@NgModule({
  declarations: [
    TvOnTheAirDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(TvOnTheAirDetailPage),
  ],
})
export class TvOnTheAirDetailPageModule {}
