import { Component, OnInit } from '@angular/core';
import { AzureProfileService } from 'src/app/Service/azure-profile.service';

@Component({
  selector: 'app-header-details',
  templateUrl: './header-details.component.html',
  styleUrls: ['./header-details.component.css']
})
export class HeaderDetailsComponent implements OnInit {

  constructor(private azureProfileService:AzureProfileService) { }

  ngOnInit(): void {
  }

  logout(){
    this.azureProfileService.logout();
  }
}
