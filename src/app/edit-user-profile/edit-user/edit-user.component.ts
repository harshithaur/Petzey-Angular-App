import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PetOwner } from 'src/app/Models/PetOwner';
import { ServicePetOwner } from 'src/app/Service/Service-PetOwner';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup

  owner: number = 6;
  petOwner!: PetOwner;

  constructor(private ser: ServicePetOwner,
    private router: Router,
    private fb: FormBuilder) {
    this.getmethod();
  }

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: new FormControl(),
      userNumber: new FormControl(),
      userlocation: new FormControl(),
      gender: new FormControl(),
      pincode: new FormControl(),
      petOwnerId: new FormControl(),
      email: new FormControl(),
      Image: new FormControl()
    })
  }

  getmethod() {
    this.ser.getPetOwnerById(this.owner).subscribe((data: any) => {
      console.log(data);
      this.userForm.controls['userName'].setValue(data.parentName)
      this.userForm.controls['userNumber'].setValue(data.mobile)
      this.userForm.controls['userlocation'].setValue(data.location)
      this.userForm.controls['gender'].setValue(data.gender)
      this.userForm.controls['pincode'].setValue(data.pincode)
      this.userForm.controls['petOwnerId'].setValue(data.petOwnerId)
      this.userForm.controls['email'].setValue(data.email)
      this.userForm.controls['Image'].setValue(data.ownerImage)
    })
  }

  postData() {
    this.petOwner = {
      petOwnerId: this.userForm.get('petOwnerId')?.value,
      parentName: this.userForm.get('userName')?.value,
      mobile: this.userForm.get('userNumber')?.value,
      email: this.userForm.get('email')?.value,
      gender: this.userForm.get('gender')?.value,
      location: this.userForm.get('userlocation')?.value,
      pincode: this.userForm.get('pincode')?.value,
      ownerImage: this.userForm.get('Image')?.value
    }
    console.log(this.petOwner)
    this.ser.updatePetOwner(this.petOwner,this.petOwner.petOwnerId).subscribe({
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