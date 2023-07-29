import { Component, OnInit, ViewChild } from '@angular/core';
import { Family } from 'src/app/models/Family';
import { FamilyServiceService } from 'src/app/service/family-service.service';

@Component({
  selector: 'app-family-pagination',
  templateUrl: './family-pagination.component.html',
  styleUrls: ['./family-pagination.component.css']
})
export class FamilyPaginationComponent implements OnInit {

  @ViewChild('closebutton') closebutton: any;
  families: Family[] = [];
  selectFamilyIdToDelete: number = 0;

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


  selectFamilyToDelete(id: number) {
    this.selectFamilyIdToDelete = id;
  }


  FamilyToDelete() {
    this.familyService.Delete(this.selectFamilyIdToDelete)
      .subscribe({
        next: (result) => {
          this.ReadFromAPI();
        },
        error: (response) => {
          console.log("Erro into FamilyToDelete(): ", response);
        }
      })

    this.closebutton.nativeElement.click();
  }

}
