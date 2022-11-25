import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pet } from '../Models/Pet';
@Injectable({
    providedIn: 'root'
})
export class ServicePet {
    constructor(private service: HttpClient) { 
    }

    getAllPet(){
        const url= `${environment.PetMockUrl}Pet/pet`;
        return this.service.get(url);
    }

    getPetById(id:Number){
        const url= `${environment.PetMockUrl}Pet/pet/${id}`;
        return this.service.get(url);
    }

    getPetByOwnerId(id:Number){
        const url= `${environment.PetMockUrl}Pet/pet/owner/${id}`;
        return this.service.get(url);
    }

    updatePet(data:any,id: any) {
        const url= `${environment.PetMockUrl}Pet/pet/${id}`;
        return this.service.put(url, data);
    }

    deletePet(id:Number){
        const url= `${environment.PetMockUrl}Pet/pet/${id}`;
        return this.service.delete(url);
    }

    createPet(data:any) {
        const url= `${environment.PetMockUrl}Pet/pet`;
        return this.service.post(url, data);
    }
}