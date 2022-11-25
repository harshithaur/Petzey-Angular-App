import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from 'src/app/Models/Pet';
import { ServicePet } from 'src/app/Service/Service-Pet';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {

  petForm!: FormGroup
  pet!: Pet; 
  petId: number = 4;

  constructor(private serve: ServicePet,
    private router: Router,
    private fb: FormBuilder) {
    this.getmethod();
  }

  ngOnInit() {
    this.petForm = this.fb.group({
      petId: new FormControl(),
      petName: new FormControl(),
      petSpecies:new FormControl(),
      petGender: new FormControl(),
      petAllergies: new FormControl(),
      petDateOfBirth:new FormControl(),
      petAge:new FormControl(),
      petBloodGroup:new FormControl(),
      petOwnerId:new FormControl(),
      petParentName:new FormControl(),
      petImage:new FormControl()
    })
  }

  getmethod() {
    this.serve.getPetById(this.petId).subscribe((data: any) => {
      console.log(data);
      this.petForm.controls['petId'].setValue(data.petId)
      this.petForm.controls['petName'].setValue(data.petName)
      this.petForm.controls['petSpecies'].setValue(data.species)
      this.petForm.controls['petGender'].setValue(data.gender)
      this.petForm.controls['petAllergies'].setValue(data.allergies)
      this.petForm.controls['petDateOfBirth'].setValue(data.dateOfBirth)
      this.petForm.controls['petAge'].setValue(data.age)
      this.petForm.controls['petBloodGroup'].setValue(data.bloodGroup)
      this.petForm.controls['petOwnerId'].setValue(data.petOwnerId)
      this.petForm.controls['petParentName'].setValue(data.parentName)
      this.petForm.controls['petImage'].setValue(data.image)
    })
  }

  postData() {
    this.pet = {
      petId: this.petForm.get('petId')?.value,
      petName: this.petForm.get('petName')?.value,
      species: this.petForm.get('petSpecies')?.value,
      gender: this.petForm.get('petGender')?.value,
      allergies: this.petForm.get('petAllergies')?.value,
      dateOfBirth: this.petForm.get('petDateOfBirth')?.value,
      age: this.petForm.get('petAge')?.value,
      bloodGroup: this.petForm.get('petBloodGroup')?.value,
      petOwnerId: this.petForm.get('petOwnerId')?.value,
      parentName: this.petForm.get('petParentName')?.value,
      image: this.petForm.get('petImage')?.value
    }
    console.log(this.pet)
    this.serve.updatePet(this.pet,this.pet.petId).subscribe({
      next: (res) => {
        console.log("+++++++++++++++", res);
        this.changeScreen();
      },
      error: (err) => console.log(err),
    });
  }

  changeScreen() {
    this.router.navigate(['profile']);
  }

}
