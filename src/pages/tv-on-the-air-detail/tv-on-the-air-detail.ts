import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as enums from '../../enums/enums';

/**
 * Generated class for the TvOnTheAirDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tv-on-the-air-detail',
  templateUrl: 'tv-on-the-air-detail.html',
})
export class TvOnTheAirDetailPage {

  contact = "";
  myIP = enums.APIURL.URL;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TvOnTheAirDetailPage');
    this.contact = this.navParams.data;
    console.log(this.contact);
  }

}
