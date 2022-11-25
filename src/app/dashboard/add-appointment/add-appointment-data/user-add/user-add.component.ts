import { DatePipe } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetData } from 'src/app/Data/mock-pet-data';
import { PetIssuesData } from 'src/app/Data/PetIssue-Data';
import { VetData } from 'src/app/Data/Vet-details';
import { AppointmentDTO } from 'src/app/Models/AppointmentDTO';
import { Vet } from 'src/app/Models/Vet';
import { Pet } from 'src/app/Models/Pet';
import { PetIssues } from 'src/app/Models/Pet-Issues';
import { AppointmentService } from 'src/app/Service/Service-Appointment';
import { ServicePet } from 'src/app/Service/Service-Pet';
import { ServiceVet } from 'src/app/Service/Service-Vets';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  appointmentData!: AppointmentDTO;
  datetime_hide: boolean = false;
  date_hide: boolean = false;

  color_change = '';

  appointmentForm!: FormGroup;

  issues!: string[];

  selected!: Date | null;
  timeArray = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  petList: any= []; 
  vetList: any = [];
  petIssueList: PetIssues[] = PetIssuesData;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private datepipe: DatePipe,
    private service: AppointmentService,
    private petService: ServicePet,
    private vetService: ServiceVet
  ) {
    this.petService.getAllPet().subscribe(
      (response) => {
        this.petList = response;
        console.log(this.petList);
      }
    );

    this.vetService.getDoctor().subscribe(
      (response) => {
        this.vetList = response;
        console.log(this.vetList);
      }
    );
  }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      appointmentDate: new FormControl(),
      appointmentTime: new FormControl(),
      issue: new FormControl(),
      reason: new FormControl(),
      pet: new FormControl(),
      parent: new FormControl(),
      vet: new FormControl(),
    });
  }

  updateFormDate(event: any) {
    var date = this.datepipe.transform(event, 'yyyy-MM-dd');
    this.appointmentForm.get('appointmentDate')?.setValue(date);
  }

  updateFormTime(data: any) {
    this.appointmentForm.get('appointmentTime')?.setValue(data);
  }

  displayFnForpet(pet: Pet): string {
    return pet && pet.petName ? pet.petName : '';
  }
  displayFnVet(vet: Vet): string {
    return vet && vet.name ? vet.name : '';
  }
  displayFnForIssue(issue: PetIssues): string {
    return issue && issue.name ? issue.name : '';
  }

  changeScreen() {
    this.router.navigate(['dashboard', 'allAppointment']);
  }

  submitForm() {
    this.appointmentData = {
      appointmentId: 0,
      date: this.appointmentForm.get('appointmentDate')?.value,
      time: this.appointmentForm.get('appointmentTime')?.value,
      reasonForVisit: this.appointmentForm.get('reason')?.value,
      petIssueId: this.appointmentForm.get('issue')?.value.id,
      petId: this.appointmentForm.get('pet')?.value.petId,
      doctorId: this.appointmentForm.get('vet')?.value.doctorId,
      doctorName: this.appointmentForm.get('vet')?.value.name,
      petIssueName: this.appointmentForm.get('issue')?.value.name,
      petName: this.appointmentForm.get('pet')?.value.petName,
      petOwnerId: 6,
      petOwnerName: "John",
    };
    console.log(this.appointmentData);
    this.service.createAppointment(this.appointmentData).subscribe({
      next: (res) => {
        console.log("+++++++++++++++",res);
        this.changeScreen();
      },
      error: (err) => console.log(err),
    });
  }

  datehide() {
    if (this.date_hide == false) {
      this.date_hide = true;
    }
    else {
      this.date_hide = false;
    }
  }

  datetimehide() {
    if (this.datetime_hide == false) {
      this.datetime_hide = true;
    }
    else {
      this.datetime_hide = false;
    }
  }

}
