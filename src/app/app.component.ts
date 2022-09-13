import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationResponse } from './translationResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Giusseppe's Info`;
  translationResponse: TranslationResponse;

  constructor(private translate: TranslateService){
    //translate.addLangs(["en", "es","pt"]);
    translate.setDefaultLang('en');

    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    //translate.use("en");


  }
}
