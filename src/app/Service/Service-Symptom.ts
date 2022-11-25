import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Symptoms } from '../Models/Symptoms';

@Injectable({
  providedIn: 'root'
})

export class ServiceSymptom {
  constructor(private service: HttpClient) {
  }

  getAllSymptom(): Symptoms[] {
    const url = `${environment.VetMockUrl}Vets/Symptoms`;
    let symptomDetails: Symptoms[] = [];
    this.service.get<Symptoms[]>(url).subscribe({
      next: incomingData => {
        symptomDetails = incomingData;
      },
    })
    return symptomDetails;
  }

  getSymptomById(id: Number): Symptoms {
    const url = `${environment.VetMockUrl}Vets/Symptoms/${id}`;
    let symptomDetails!: Symptoms;
    this.service.get<Symptoms>(url).subscribe({
      next: incomingData => {
        symptomDetails = incomingData;
      },
    })
    return symptomDetails;
  }

  getSymptomByAppId(id:Number) {
    const url = `${environment.VetMockUrl}Vets/Symptom`;
    return this.service.get(url);
  }

  createSymptom(data: any) {
    const url = `${environment.VetMockUrl}Symptom`;
    return this.service.post(url, data);
  }

  updateSymptom(data: any) {
    const url = `${environment.VetMockUrl}Symptom`;
    return this.service.put(url, data);
  }

  deleteSymptom(id: Number) {
    const url = `${environment.VetMockUrl}Symptom/${id}`;
    return this.service.delete(url);
  }
}
