import { Component, OnInit } from '@angular/core';
import { Family } from 'src/app/models/Family';

@Component({
  selector: 'app-family-pagination',
  templateUrl: './family-pagination.component.html',
  styleUrls: ['./family-pagination.component.css']
})
export class FamilyPaginationComponent implements OnInit {


  families: Family[] = [
   
    {
      id: 1,
      name: "",
      email: '',
      money: 123,
      phone: ''
    },
    {
      id: 2,
      name: "",
      email: '',
      money: 456,
    },
    {
      id: 3,
      name: "",
      email: '',
      money: 678,
    }

  ];

  constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




  private seedFamily() {

    for (let index = 0; index < 100; index++) {

     /*  this.families.push(new Family(){
        id: index + 1,
        name: 'xsxs' + index,
        money: 678,
      }) */

    }

  }

}
