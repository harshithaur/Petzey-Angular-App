import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Test } from '../Models/Test';


@Injectable({
  providedIn: 'root'
})

export class ServiceTest{
  constructor(private service:HttpClient){
  }
  getAllTest():Test[]{
    const url = `${environment.VetMockUrl}Vets/Test`;
        let testDetails: Test[] = [];
        this.service.get<Test[]>(url).subscribe({
            next: incomingData => {
                testDetails =incomingData;
            },
        })
        return testDetails;
  }

  getTestById(id:Number):Test{
    const url = `${environment.VetMockUrl}Vets/Test/${id}`;
    let testDetails!: Test;
    this.service.get<Test>(url).subscribe({
        next: incomingData => {
            testDetails =incomingData;
        },
    })
    return testDetails;
  }

  getTestByAppId(id:Number) {
    const url = `${environment.VetMockUrl}Vets/Test`;
    return this.service.get(url);
  }

  updateTest(data:any){
    const url = `${environment.VetMockUrl}Test`;
    return this.service.put(url, data);
  }

  createTest(data:any){
    const url = `${environment.VetMockUrl}Test`;
    return this.service.post(url, data);
  }

  deleteTest(id:Number){
    const url = `${environment.VetMockUrl}Test/${id}`;
    return this.service.delete(url);
  }
}
