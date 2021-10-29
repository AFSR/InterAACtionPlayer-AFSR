import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Import Services
 */
import { ThemeService } from '../../../../../../../src/app/services/theme.service';
import { GlobalService } from '../../../services/global.service';

/**
 * Import Models
 */
import { IResult } from '../../../models/iresult';
import {LanguageService} from "../../../../../../../src/app/services/language.service";
import {StatusInternetService} from "../../../../../../../src/app/services/status-internet.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput: string;
  searchRes: IResult[];
  theme = "";

  private router: Router;
  private themeService: ThemeService;
  private globalService: GlobalService;

  /**
   * @param router
   * @param themeService
   * @param globalService
   * @param languageService
   * @param statusInternet
   *
   * Initialize the router for navigate between page
   * And allows to initialize the page with the right theme
   */
  constructor(router: Router,
              themeService: ThemeService,
              globalService: GlobalService,
              private languageService: LanguageService,
              private statusInternet: StatusInternetService) {
    this.router = router;
    this.themeService = themeService;
    this.theme = this.themeService.theme;
    this.globalService = globalService;
  }

  ngOnInit(): void {
    if (this.theme == "inverted"){
      this.theme = this.theme + " transparent contourColor";
    }
  }

  /**
   * Get music on Deezer who are equal with the user submit in the search bar
   */
  searchMusic() {
    this.checkConnexion();
    this.globalService.searchMusic(this.searchInput).subscribe(results => {
      this.searchRes = results;
    });
  }

  /**
   * Allows to return to the Playlist web page
   */
  goPlaylist() {
    this.router.navigate([this.languageService.activeLanguage +  '/playlist']);
  }

  /**
   * @param artistId
   *
   * When the user click on a artist, navigate to this album web page
   */
  public navigate(artistId): void {
    this.checkConnexion();
    this.globalService.idArtistChoose = artistId;
    this.router.navigate([this.languageService.activeLanguage + '/deezer/artists', artistId]);
  }

  checkConnexion(){
    this.statusInternet.checkStatusInternet();
  }
}
