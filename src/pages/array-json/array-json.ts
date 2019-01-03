import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as enums from '../../enums/enums';


@IonicPage()
@Component({
  selector: 'page-array-json',
  templateUrl: 'array-json.html',
})
export class ArrayJsonPage {

  gameArray = [];

  myIP = enums.APIURL.URL;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
      this.loadGameData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrayJsonPage');

  }

  loadGameData() {
    let url = this.myIP + '/shop/getAllGames_7.php';
    this.http.get(url).subscribe(
      (data: any) => {
  
        this.gameArray = data.games;
        console.log(this.gameArray);
      }
      , (error) => { console.log(error); }
    );
  }

}
