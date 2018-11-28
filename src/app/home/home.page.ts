import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public isSearchbarOpend = false;
  constructor(public navCtrl:NavController){

  }
  onSearch(event){
    console.log(event.target.value);
  }
}
