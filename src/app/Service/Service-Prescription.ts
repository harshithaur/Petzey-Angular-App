import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Prescription } from '../Models/Prescription';


@Injectable({
  providedIn: 'root'
})

export class ServicePrescription {
  constructor(private service: HttpClient) {
  }


  getAllPrescription():Prescription[] {
     const url = `${environment.VetMockUrl}Vets/Prescription`;
        let prescriptionDetails: Prescription[] = [];
        this.service.get<Prescription[]>(url).subscribe({
            next: incomingData => {
                prescriptionDetails =incomingData;
            },
        })
        return prescriptionDetails;
  }

  getPrescriptionById(id:Number) {
    const url = `${environment.VetMockUrl}Vets/Prescription`;
    let prescriptionDetails!: Prescription;
    this.service.get<Prescription>(url).subscribe({
        next: incomingData => {
            prescriptionDetails =incomingData;
        },
    })
    return prescriptionDetails;
  }
  getPrescriptionByAppId(id:Number) {
    const url = `${environment.VetMockUrl}Vets/Prescription`;
    return this.service.get(url);
  }

  createPrescription(data:any) {
    const url = `${environment.VetMockUrl}/prescription`;
    return this.service.post(url, data);
  }

  updatePrescription(data:any) {
    const url = `${environment.VetMockUrl}/prescription`;
    return this.service.put(url, data);
  }

  deletePrescription(id:Number) {
    const url = `${environment.VetMockUrl}/prescription/${id}`;
    return this.service.delete(url);
  }
}

