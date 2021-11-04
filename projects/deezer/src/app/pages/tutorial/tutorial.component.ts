import { Component, OnInit } from '@angular/core';
import { LanguageService } from "../../../../../../src/app/services/language.service";

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  activeLanguage;

  constructor(private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.activeLanguage = this.languageService.activeLanguage;
  }

}
