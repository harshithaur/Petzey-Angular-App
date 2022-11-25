import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppointmentDTO } from 'src/app/Models/AppointmentDTO';
import { Appointment } from 'src/app/Models/appointmentForm.model';
import { Pet } from 'src/app/Models/Pet';
import { PetIssues } from 'src/app/Models/Pet-Issues';
import { PetOwner } from 'src/app/Models/PetOwner';
import { Vet } from 'src/app/Models/Vet';
import { ServiceJSON } from 'src/app/Service/Servcie-JSON';
import { AppointmentService } from 'src/app/Service/Service-Appointment';
import { ServicePet } from 'src/app/Service/Service-Pet';
import { ServicePetOwner } from 'src/app/Service/Service-PetOwner';
import { ServiceVet } from 'src/app/Service/Service-Vets';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  docId = 4;
  appointment: any = [];
  appointmentDetails: any = [];
  constructor(
    private getAppointmentForDoc: AppointmentService,
    private petService: ServicePet,
    private ownerService: ServicePetOwner,
    private vetService: ServiceVet,
    private service: HttpClient,
    private JSONService: ServiceJSON,
  ) {

    this.getAppointmentForDoc.getAppointmentByDoctorId(this.docId).subscribe(
      (response) => {
        this.appointmentDetails = response;
        this.getmethod();
      }
    )
  }



  ngOnInit() {
    console.log(this.appointment);
  }

  getmethod() {
    for (let i = 0; i < this.appointmentDetails.length; i++) {
      this.appointment.push(this.appointmentDetails[i])
    }
  }

}
