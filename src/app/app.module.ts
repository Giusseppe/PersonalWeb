import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OcioComponent } from './ocio/ocio.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { CvComponent } from './cv/cv.component';
import { MeComponent } from './me/me.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UdemyService } from './udemy.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './translations/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OcioComponent,
    PortafolioComponent,
    CvComponent,
    MeComponent,
    ContactoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],

    }
  })
  ],
  providers: [UdemyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
