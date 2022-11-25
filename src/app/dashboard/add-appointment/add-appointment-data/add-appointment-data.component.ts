import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-appointment-data',
  templateUrl: './add-appointment-data.component.html',
  styleUrls: ['./add-appointment-data.component.css']
})
export class AddAppointmentDataComponent implements OnInit {
  doc : boolean =false;
  patient : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
