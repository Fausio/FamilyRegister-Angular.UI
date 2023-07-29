import { Component } from '@angular/core';
import { Family } from 'src/app/models/Family';

@Component({
  selector: 'app-family-add',
  templateUrl: './family-add.component.html',
  styleUrls: ['./family-add.component.css']
})
export class FamilyAddComponent {


  Addmodel: Family = {
    id: 0,
    name: '',
    phone: '',
    money: 0,
    address: '',
    email: ''

  };

  constructor() { }

  AddFamily(){

    console.log("data", this.Addmodel)
  }

}
