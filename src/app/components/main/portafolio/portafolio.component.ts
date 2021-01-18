import { Component, OnInit } from '@angular/core';

export interface Proyecto {
  idProyecto: string;
  title: string;
  desc: string;
  url: string;
  img: string;
}

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})


export class PortafolioComponent implements OnInit {

  proyectos: Proyecto[] = [];

  constructor() { }

  ngOnInit() {
    this.populate();
  }
  populate() {
    this.proyectos.push({ idProyecto: 'main.portafolio.p1.id', title: 'main.portafolio.p1.title', desc: 'main.portafolio.p1.desc', url: '', img: 'assets/img/proyects/p1.png' });
    this.proyectos.push({ idProyecto: 'main.portafolio.p2.id', title: 'main.portafolio.p2.title', desc: 'main.portafolio.p2.desc', url: '', img: 'assets/img/proyects/p2.png' });
    this.proyectos.push({ idProyecto: 'main.portafolio.p3.id', title: 'main.portafolio.p3.title', desc: 'main.portafolio.p3.desc', url: 'http://testfe.yupee.cl', img: 'assets/img/proyects/p3.png' });
  }

}
