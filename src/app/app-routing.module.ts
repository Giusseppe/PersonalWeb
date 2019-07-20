import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { OcioComponent } from './ocio/ocio.component';

const routes: Routes = [
  {path: '', component: CvComponent },
  {path: 'cv', component: CvComponent },
  {path: 'portafolio', component: PortafolioComponent },
  {path: 'ocio', component: OcioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
