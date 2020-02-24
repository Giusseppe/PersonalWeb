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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
