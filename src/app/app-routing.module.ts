import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/main/contacto/contacto.component';
import { CvComponent } from './components/main/cv/cv.component';
import { MeComponent } from './components/main/me/me.component';
import { OcioComponent } from './components/main/ocio/ocio.component';
import { PortafolioComponent } from './components/main/portafolio/portafolio.component';

const routes: Routes = [
  { path: '', component: MeComponent },
  { path: 'me', component: MeComponent },
  { path: 'cv', component: CvComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'ocio', component: OcioComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
