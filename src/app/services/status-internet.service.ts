import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { LanguageService } from "./language.service";

@Injectable({
  providedIn: 'root'
})
export class StatusInternetService {

  public internetStatus: boolean = false;

  constructor(private router: Router,
              private languageService: LanguageService) {
    window.addEventListener('online', () => {this.internetStatus = true});
    window.addEventListener('offline', () => {this.internetStatus = false});
  }

  checkStatusInternet(){
    if (!this.internetStatus){
      this.router.navigate([this.languageService.getLanguage() + '/error']);
    }
  }

  getStatusInternet(){
    return this.internetStatus;
  }
}
