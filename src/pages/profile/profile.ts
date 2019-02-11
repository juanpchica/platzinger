import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  items : Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,afDB: AngularFireDatabase) {
    this.items = afDB.list('usuarios').valueChanges();
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
