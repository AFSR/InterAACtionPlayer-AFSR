import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../../../src/app/services/theme.service';
import { Router } from "@angular/router";
import { LanguageService } from "../../../../../../src/app/services/language.service";
import { StatusInternetService } from "../../../../../../src/app/services/status-internet.service";
import { TutorialComponent } from "../tutorial/tutorial.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  theme = "";

  constructor(private themeService: ThemeService,
              private router: Router,
              private laguageService: LanguageService,
              private statusInternet: StatusInternetService,
              private dialog: MatDialog) {
    this.theme = themeService.theme;
  }

  ngOnInit(): void {
  }

  goSearch(){
    this.checkConnexion();
    this.router.navigate([this.laguageService.activeLanguage + '/deezer/search']);
  }

  goPlaylist(){
    this.checkConnexion();
    this.router.navigate([this.laguageService.activeLanguage + '/playlist']);
  }

  openTutorial(){
    this.dialog.open(TutorialComponent, {
      height: '75%',
      width: '75%'
    });
  }

  checkConnexion(){
    this.statusInternet.checkStatusInternet();
  }
}
