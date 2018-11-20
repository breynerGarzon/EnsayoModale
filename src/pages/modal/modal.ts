import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  items: Array<{ name: string, ocupacion: string}>;
  constructor(public navCtrl: NavController, private navParams: NavParams, private view: ViewController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ModalPage');
  // }
  ionViewWillLoad() {
    this.items = [];
    // const data = this.navParams.get('name');
    this.items = this.navParams.get('name');
    console.log(this.items);
  }

  closeModal() {
    
    this.items.push({
      name: 'Jhon doe',
      ocupacion:'MilkMan'
    });

    // const data ={
    //   name: 'Jhon doe',
    //   ocupacion:'MilkMan'
    // }
    this.view.dismiss(this.items);
  }
}
