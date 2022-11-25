import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { ServiceVet } from 'src/app/Service/Service-Vets';

@Component({
  selector: 'app-vet-data',
  templateUrl: './vet-data.component.html',
  styleUrls: ['./vet-data.component.css']
})
export class VetDataComponent implements OnInit {
  
  vets: any = [];
  recentvet: any = [];
  vetData: any = [];
  constructor(private vetservice: ServiceVet) { 
    this.vetservice.getDoctor().subscribe(
      (response) => {
        this.vetData = response;
        this.getmethod();
      }
    )
  }

  ngOnInit(): void {
  }

  getmethod() {
    for (let i = 0; i < this.vetData.length; i++) {
      this.vets.push(this.vetData[i])
    }
    for (let i = 0; i < 4; i++) {
      this.recentvet.push(this.vetData[i])
    }
  }
}
