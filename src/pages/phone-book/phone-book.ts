import { PhoneBookDetailPage } from './../phone-book-detail/phone-book-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class PhoneBookPage {

  //อาเรย์ของออปเจค
  contactArray = [
    {name: 'Aran', telephone: '0950979240', imageUrl: 'assets/imgs/aran.jpg' }
    ,{name: 'Song', telephone: '0950159034', imageUrl: 'assets/imgs/song.jpg' }
    ,{name: 'Adinan', telephone: '0980596914', imageUrl: 'assets/imgs/adinan.jpg' }
    ,{name: 'Pepsi', telephone: '0626985509', imageUrl: 'assets/imgs/pepsi.jpg' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage", item);
  }


}//endclass
