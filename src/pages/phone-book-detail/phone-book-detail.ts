import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertCmp, AlertController, Alert } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@IonicPage()
@Component({
  selector: 'page-phone-book-detail',
  templateUrl: 'phone-book-detail.html',
})
export class PhoneBookDetailPage {
  contact = {name: '', telephone: '', imageUrl: ''};
  constructor(public navCtrl: NavController, public navParams: NavParams, public mysms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookDetailPage');
    this.contact = this.navParams.data;
    console.log(this.contact);
  }

  call(){
    var r = confirm("ต้องการที่จะโทรหา "+this.contact.name+ ' หรือไม่');
    if (r == true) {
        window.open('tel:'+this.contact.telephone);
    } 
    
  }

  sms(){
    var r = confirm("ต้องการที่จะส่งข้อความหา "+this.contact.name+ ' หรือไม่');
    if (r == true) {
        this.mysms.send(this.contact.telephone,'โทรกลับด่วน')
    } 
    
  }

}//endclass
