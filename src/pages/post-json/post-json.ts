import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';  //import HttpClient เพื่อให้ติดต่อกับ serve


/**
 * Generated class for the PostJsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-json',
  templateUrl: 'post-json.html',
})
export class PostJsonPage {

  returnMsg = "";

  //inject HttpClient เพื่อให้ติดต่อกับ serve
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostJsonPage');
  }

  postJsonData( _name, _sername, _email){

    alert("Name : "+_name +"\nSername : "+_sername+"\nE-mail : "+_email);
    let jsonData;
    jsonData = {name: _name, surname: _sername, email: _email};
    console.log(jsonData);

    let url = 'http://localhost/shop/ion-post-json-object.php';
    this.http.post(url,jsonData).subscribe(
      (data: any) => {
        this.returnMsg = data.message;
        console.log(data);
      }
      
    );
    
  }

}
