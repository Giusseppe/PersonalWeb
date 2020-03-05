import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Giusseppe's Info`;

  constructor(private translate: TranslateService){
    //translate.addLangs(["en", "es","pt"]);
    translate.setDefaultLang('en');

    // let browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    //translate.use("en");


  }
}
