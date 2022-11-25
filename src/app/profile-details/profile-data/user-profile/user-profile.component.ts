import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicePet } from 'src/app/Service/Service-Pet';
import { ServicePetOwner } from 'src/app/Service/Service-PetOwner';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  petData: any = [];
  pets: any = [];
  petOwnerData: any;
  petOwnerId = 6;
  hide_button:boolean = false;

  constructor(private petOwnerService: ServicePetOwner,
    private petservice: ServicePet,
    private route: Router) {
    this.petOwnerService.getPetOwnerById(this.petOwnerId).subscribe(
      (response) => {
        this.petOwnerData = response;
        console.log(this.petOwnerData);
      }
    );

    this.petservice.getPetByOwnerId(this.petOwnerId).subscribe(
      (response) => {
        this.petData = response;
        this.getMethod();
      })
  }
  ngOnInit() {
  }

  getMethod(){
    for(let i=0; i<this.petData.length;i++){
      this.pets.push(this.petData[i]);
    }
  }

  hide(){
    if(this.hide_button==true){
      this.hide_button=false;
    }
    else{
      this.hide_button=true;
    }
  }

  remove(id: number){

  }

  Edit(id: number){
    this.route.navigate(['editpet'])
  }
}