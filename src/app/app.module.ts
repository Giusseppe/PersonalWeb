import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UdemyService } from './udemy.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OcioComponent } from './components/main/ocio/ocio.component';
import { PortafolioComponent } from './components/main/portafolio/portafolio.component';
import { CvComponent } from './components/main/cv/cv.component';
import { MeComponent } from './components/main/me/me.component';
import { ContactoComponent } from './components/main/contacto/contacto.component';
import { MainComponent } from './components/main/main.component';

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
    FormsModule,
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
