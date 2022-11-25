import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
number1:NumberInput="0";
number2:NumberInput="0";
number3:NumberInput="0";
number4:NumberInput="0";



  constructor() { 

  }

  ngOnInit(): void {
  }

}
