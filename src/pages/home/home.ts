import { Component } from '@angular/core';
import { NavController, Modal, ModalController , ModalOptions} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<{ name: string, ocupacion: string}>;
  constructor(public navCtrl: NavController, private modal: ModalController) {

    this.items = [];
    this.items.push({
      name: 'Paul ',
      ocupacion: 'Desarrollador'
    });
    this.items.push({
      name: 'Paul 2 ',
      ocupacion: 'Desarrollador'
    });
  }

  openModal() {
    const myModalOptions: ModalOptions = {
enableBackdropDismiss: false
    }
    // const mymodalData = {
    //   name: 'Paul ',
    //   ocupacion: 'Desarrollador'
    // }
    const myModal = this.modal.create('ModalPage', { name: this.items }, myModalOptions);
    myModal.present();
    myModal.onDidDismiss((data) => {
      console.log("He desaparecido");
      console.log(data);
    });

    myModal.onWillDismiss((data)=>{
      console.log("Estiy apunto de desapareceer");
      console.log(data);
      
    });
  }

}
