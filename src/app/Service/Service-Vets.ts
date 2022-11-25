import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vet } from '../Models/Vet';

@Injectable({
  providedIn: 'root'
})

export class ServiceVet {
  constructor(private service: HttpClient) {
  }

  getDoctor(){
    const url = `${environment.VetMockUrl}Vets/Doctor`;
    return this.service.get(url);
  }

  getDoctorById(id: Number) {
    const url = `${environment.VetMockUrl}Vets/Doctor/${id}`;
    return this.service.get(url);
  }


  createDoctor(data: any) {
    const url = `${environment.VetMockUrl}Vets/Doctor`;
    return this.service.post(url, data);
  }

  updateDoctor(data: any,id: number) {
    const url = `${environment.VetMockUrl}Vets/Doctor/${id}`;
    return this.service.put(url, data);
  }
  deleteDoctor(id: Number) {
    const url = `${environment.VetMockUrl}Vets/Doctor/${id}`;
    return this.service.delete(url);
  }
}
