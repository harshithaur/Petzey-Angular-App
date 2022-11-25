import { Component, OnInit } from '@angular/core';
import { ServicePet } from 'src/app/Service/Service-Pet';

@Component({
  selector: 'app-pet-data',
  templateUrl: './pet-data.component.html',
  styleUrls: ['./pet-data.component.css']
})
export class PetDataComponent implements OnInit {

  constructor(private petservice: ServicePet) { 
    this.petservice.getAllPet().subscribe(
      (response) => {
        this.petData = response;
        this.getmethod();
      }
    )
  }

  ngOnInit(): void {
    console.log(this.pets);
  }

  pets: any = [];
  petData: any = [];



  getmethod() {
    for (let i = 0; i < this.petData.length; i++) {
      this.pets.push(this.petData[i])
    }
  }

}
