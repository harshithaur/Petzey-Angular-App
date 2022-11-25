import { Injectable } from "@angular/core";
import { ClinicData } from "../Data/clinic-data";
import { PetIssuesData } from "../Data/PetIssue-Data";
import { clinic } from "../Models/clinic";
import { PetIssues } from "../Models/Pet-Issues";

@Injectable({
    providedIn: 'root'
})
export class ServiceJSON {
    constructor() {
    }

    petissues : PetIssues[] = PetIssuesData;
    clinics : clinic[] = ClinicData;

    getPetIssuesById(id: number): any {
        return this.petissues.find(x => x.id === id);
    }

    getClinicById(id:Number): any{
        return this.clinics.find(x => x.id === id);
    }
}