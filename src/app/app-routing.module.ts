import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './main/cv/cv.component';
import { PortafolioComponent } from './main/portafolio/portafolio.component';
import { OcioComponent } from './main/ocio/ocio.component';
import { MeComponent } from './main/me/me.component';
import { ContactoComponent } from './main/contacto/contacto.component';

const routes: Routes = [
  {path: '', component: MeComponent },
  {path: 'me', component: MeComponent },
  {path: 'cv', component: CvComponent },
  {path: 'portafolio', component: PortafolioComponent },
  {path: 'ocio', component: OcioComponent },
  {path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
