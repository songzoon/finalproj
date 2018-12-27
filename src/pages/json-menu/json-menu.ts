import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-json-menu',
  templateUrl: 'json-menu.html',
})
export class JsonMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsonMenuPage');
  }

  choie(_choie){
    if (_choie == 1) {
      this.navCtrl.push("SimpleJsonPage");
    } else if(_choie == 2){
      alert("Now not choie");
    }
    else if(_choie == 3){
      this.navCtrl.push("PostJsonPage");
    }
  }

}
