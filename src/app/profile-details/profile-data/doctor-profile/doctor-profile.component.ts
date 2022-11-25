import { Component, OnInit } from '@angular/core';
import { ServiceJSON } from 'src/app/Service/Servcie-JSON';
import { ServiceVet } from 'src/app/Service/Service-Vets';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  vets: any;
  vetData: any;
  clinic: any;
  docId = 4;
  constructor(private vetservice: ServiceVet,
    private Service: ServiceJSON) { 
    this.vetservice.getDoctorById(this.docId).subscribe(
      (response) => {
        this.vetData = response;
        console.log(this.vetData);
        this.clinic = this.Service.getClinicById(this.vetData.clinicId);
      }
    )
  }

  ngOnInit(): void {
  }

  data(value:any){
    sessionStorage.setItem('docId',value)
    console.log(value)
  }

}
