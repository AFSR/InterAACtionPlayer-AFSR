import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../../../src/app/services/theme.service';
import { AuthguardService } from '../../../../src/app/services/authguard.service';
import { StatusInternetService } from "../../../../src/app/services/status-internet.service";
import { TutorialComponent} from "./tutorial/tutorial.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'youtube';

  theme = "";

  /**
   * @param themeService
   * @param authGuardService
   * @param statusInternet
   * @param dialog
   *
   * Allows to initialize the page with the right theme
   */
  constructor(private themeService: ThemeService,
              private authGuardService: AuthguardService,
              private statusInternet: StatusInternetService,
              private dialog: MatDialog) {
    this.theme = themeService.theme;
    this.statusInternet.checkStatusInternet();
  }

  ngOnInit(): void {
  }

  openTutorial(){
    this.dialog.open(TutorialComponent, {
      height: '75%',
      width: '75%'
    });
  }
}
