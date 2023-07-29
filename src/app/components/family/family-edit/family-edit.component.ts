import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Family } from 'src/app/models/Family';
import { FamilyServiceService } from 'src/app/service/family-service.service';

@Component({
  selector: 'app-family-edit',
  templateUrl: './family-edit.component.html',
  styleUrls: ['./family-edit.component.css']
})
export class FamilyEditComponent implements OnInit {


  constructor(private familyService: FamilyServiceService, private activeRoute: ActivatedRoute) {

  }

  EditModel: Family  ={
    id: 0,
    name: '',
    phone: '',
    money: 0,
    address: '',
    email: ''
  }


  ngOnInit(): void {

    this.activeRoute.paramMap
      .subscribe({
        next: (param) => {
          const id = param.get('id');

          console.log("id: ", id);

          if (id) {

            this.ReadById(Number(id)); 

          }
        }
      })
  }


  UpdateFamily(){

  }

  ReadById(id: number) {
    this.familyService.ReadById(id)
      .subscribe({
        next: (result) => {
          this.EditModel = result;
        },
        error: (response) => {
          console.log("error: ", response);
        }

      })
  }

}
