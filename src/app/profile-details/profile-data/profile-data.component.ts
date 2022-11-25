import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.css']
})
export class ProfileDataComponent implements OnInit {
  doc : boolean =true;
  patient : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
