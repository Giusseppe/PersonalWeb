import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { OcioComponent } from './ocio/ocio.component';
import { MeComponent } from './me/me.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {path: '', component: MeComponent },
  {path: 'me', component: MeComponent },
  {path: 'cv', component: CvComponent },
  {path: 'portafolio', component: MeComponent },
  {path: 'ocio', component: MeComponent },
  {path: 'contacto', component: MeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
