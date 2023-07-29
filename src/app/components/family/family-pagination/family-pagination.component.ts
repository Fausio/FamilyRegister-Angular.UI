import { Component, OnInit } from '@angular/core';
import { Family } from 'src/app/models/Family';
import { FamilyServiceService } from 'src/app/service/family-service.service';

@Component({
  selector: 'app-family-pagination',
  templateUrl: './family-pagination.component.html',
  styleUrls: ['./family-pagination.component.css']
})
export class FamilyPaginationComponent implements OnInit {


  families: Family[] = [ ];

  constructor(private familyService: FamilyServiceService) {

  }

  ngOnInit(): void {
    this.ReadFromAPI();
  }




  private ReadFromAPI() {

    this.familyService.Read()
      .subscribe({
        next: (result) => {
          this.families = result;
        },
        error: (response) => {
          console.log("Erro: ", response);
        }
      })

  }

}
