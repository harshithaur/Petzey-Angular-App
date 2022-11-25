import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Vet } from 'src/app/Models/Vet';
import { ServiceVet } from 'src/app/Service/Service-Vets';

@Component({
  selector: 'app-edit-vet',
  templateUrl: './edit-vet.component.html',
  styleUrls: ['./edit-vet.component.css']
})
export class EditVetComponent implements OnInit {

  editForm!: FormGroup
  docId: any;
  vetData!: Vet;

  constructor(private serv: ServiceVet,
    private fb: FormBuilder,
    private router: Router,) {
    this.getmethod();
  }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      editName: new FormControl(),
      editNPINo: new FormControl(),
      editMobile: new FormControl(),
      editEmail: new FormControl(),
      editSpeciality: new FormControl(),
      editclinic: new FormControl(),
      docid: new FormControl(),
      image: new FormControl()
    })
  }

  getmethod() {
    this.docId = sessionStorage.getItem('docId');
    this.serv.getDoctorById(this.docId).subscribe((data: any) => {
      console.log(data)
      this.editForm.controls['editName'].setValue(data.name)
      this.editForm.controls['editNPINo'].setValue(data.npiNumber)
      this.editForm.controls['editMobile'].setValue(data.mobileNo)
      this.editForm.controls['editEmail'].setValue(data.email)
      this.editForm.controls['editSpeciality'].setValue(data.speciality)
      this.editForm.controls['editclinic'].setValue(data.clinicId)
      this.editForm.controls['docid'].setValue(data.doctorId)
      this.editForm.controls['image'].setValue(data.image)
    });
  }

  postData() {
    this.vetData = {
      doctorId: this.editForm.get('docid')?.value,
      name: this.editForm.get('editName')?.value,
      speciality: this.editForm.get('editSpeciality')?.value,
      mobileNo: this.editForm.get('editMobile')?.value,
      npiNumber: this.editForm.get('editNPINo')?.value,
      email: this.editForm.get('editEmail')?.value,
      clinicId: this.editForm.get('editclinic')?.value,
      image: this.editForm.get('image')?.value,
    }
    console.log(this.vetData);
    this.serv.updateDoctor(this.vetData, this.vetData.doctorId).subscribe({
      next: (res) => {
        console.log("+++++++++++++++", res);
        this.changeScreen();
      },
      error: (err) => console.log(err),
    })
  }

  changeScreen() {
    this.router.navigate(['profile']);
  }
}
