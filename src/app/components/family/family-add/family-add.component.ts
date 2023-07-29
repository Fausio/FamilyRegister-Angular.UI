import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Family } from 'src/app/models/Family';
import { FamilyServiceService } from 'src/app/service/family-service.service';

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

  constructor(private familyService: FamilyServiceService, private route:Router) {

  }


  AddFamily() {

    this.familyService.Create(this.Addmodel)
      .subscribe({

        next: (result) => {
          this.route.navigate(['family-pagination']);
        },
        error: (response) => {
          console.log("error: ", response);
        }

      })
  }

}
