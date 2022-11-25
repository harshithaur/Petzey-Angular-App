import { AppointmentDTO } from "./AppointmentDTO";
import { Pet } from "./Pet";
import { PetIssues } from "./Pet-Issues";
import { PetOwner } from "./PetOwner";
import { Vet } from "./Vet";

export class Appointment {
  constructor(appointment: AppointmentDTO,pet: Pet){
    this.appointment = appointment;
    this.pet = pet;
  }
  appointment: AppointmentDTO;
  pet!: Pet;
  // parent!: PetOwner;
  // vet!: Vet;
  // petIssue!: PetIssues;
}
