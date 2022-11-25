import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ServicePetOwner {
  constructor(private service: HttpClient) {
  }

  getAllPetOwner() {
    const url = `${environment.PetMockUrl}Pet/PetOwner`;
    return this.service.get(url);
  }

  getPetOwnerById(id: Number){
    const url = `${environment.PetMockUrl}Pet/PetOwner/${id}`;
    return this.service.get(url);
  }
  updatePetOwner(data: any,id: number){
    const url = `${environment.PetMockUrl}Pet/PetOwner/${id}`;
    return this.service.put(url, data);
  }
  deletePetOwner(id: Number) {
    const url = `${environment.PetMockUrl}Pet/PetOwner/${id}`;
    return this.service.delete(url);
  }
  createPetOwner(data: any) {
    const url = `${environment.PetMockUrl}Pet/PetOwner`;
    return this.service.post(url, data);
  }
}
