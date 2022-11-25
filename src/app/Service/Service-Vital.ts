import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Vital } from '../Models/vital';

@Injectable({
  providedIn: 'root'
})

export class ServiceVital{
  constructor(private service: HttpClient) {
  }

  getAllVital():Vital[]{
    const url = `${environment.VetMockUrl}Vets/Vital`;
    let vetDetails: Vital[] = [];
    this.service.get<Vital[]>(url).subscribe({
      next: incomingData => {
        vetDetails = incomingData;
      },
    })
    return vetDetails;
  }

  getVitalById(id:Number):Vital{
    const url = `${environment.VetMockUrl}Vets/Vital/${id}`;
    let vetDetails!: Vital;
    this.service.get<Vital>(url).subscribe({
      next: incomingData => {
        vetDetails = incomingData;
      },
    })
    return vetDetails;
  }

  getVitalByAppId(id:Number) {
    const url = `${environment.VetMockUrl}Vets/Vital`;
    return this.service.get(url);
  }

  updateVital(data:any){
    const url = `${environment.VetMockUrl}Vital`;
    return this.service.put(url, data);
  }

  createVital(data:any){
    const url = `${environment.VetMockUrl}Vital`;
    return this.service.post(url, data);
  }

  deleteVital(id:Number){
    const url = `${environment.VetMockUrl}Vital/${id}`;
    return this.service.delete(url);
  }
}
