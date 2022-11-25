import { Component, OnInit } from '@angular/core';
// import { SearchService } from 'src/app/Service/search-data-service';

@Component({
  selector: 'app-pet-data-details',
  templateUrl: './pet-data-details.component.html',
  styleUrls: ['./pet-data-details.component.css']
})
export class PetDataDetailsComponent implements OnInit {
  appointmentId: number = 25; 
  petowner: any;
  pet: any;
  appointmentData: any;
  constructor() {
   }

  ngOnInit(): void {
  }

}
