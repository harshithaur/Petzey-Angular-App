import { Component, OnInit } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { CryptoUtils, Logger } from 'msal';
import { Subscription } from 'rxjs';
import { b2cPolicies, isIE } from '../app.config';
import { AzureProfileService } from '../Service/azure-profile.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  subscriptions: Subscription[] = [];

  isIframe = false;
  loggedIn = false;
  //selectedOption: string;

  constructor(private azureProfileService : AzureProfileService ){}


  ngOnInit() {

   
  }

  login(){
    this.azureProfileService.login();
  }
}
