import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre: string = "Giusseppe Veliz Rojas";
  me: string = "About me";
  cv: string = "Resume";
  portafolio: string = "Portafolio";
  ocio: string = "dumb stuff";
  contacto: string = "Contact";
  languages = ['EN','ES','PT'];
  currentLanguaje = this.translateService.getDefaultLang().toUpperCase();

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }

  changeLanguage(language: string){
    console.log('Lang changed to '+language.toLowerCase());
    this.currentLanguaje = language.toUpperCase();
    this.translateService.use(language.toLowerCase());
  }
}
