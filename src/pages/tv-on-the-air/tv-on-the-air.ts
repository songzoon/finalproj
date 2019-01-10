import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as enums from '../../enums/enums';
import { detachProjectedView } from '@angular/core/src/view/view_attach';



@IonicPage()
@Component({
  selector: 'page-tv-on-the-air',
  templateUrl: 'tv-on-the-air.html',
})
export class TvOnTheAirPage {

  TVonAirArray = [];
  p = 1;
  totalpage = 0;

  myIP = "https://api.themoviedb.org/3/tv/on_the_air?api_key=b4e1da8db33117e80ca69a5af4b7bc3e&language=en-US&page=1";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
      this.loadTVonAirData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TvOnTheAirPage');
  }

  loadTVonAirData() {
    let url = this.myIP ;
    this.http.get(url).subscribe(
      (data: any) => {
        this.TVonAirArray = data.results;
        this.p = data.page;
        this.totalpage = data.total_pages
        console.log(this.p);
        console.log(this.totalpage);
        console.log(this.TVonAirArray);
      }
      , (error) => { console.log(error); }
    );
    
  }

  viewDetail(TVOnAir){
    this.navCtrl.push("TvOnTheAirDetailPage", TVOnAir);
  }

  nextpage(){
    if (this.p < this.totalpage) {
      this.p = this.p + 1;
      this.navCtrl.push("TvOnTheAirPage");
    }
  }

  preview(){
    if (this.p > 1) {
      this.p = this.p - 1;
      
    } 
  }


}
