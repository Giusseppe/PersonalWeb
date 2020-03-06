import { Component, OnInit, OnDestroy } from '@angular/core';

export interface Archieve{
  year:string;
  university:string;
  title:string;
  desc:string;
  tipo:string;
  img:string;
  url:string;
};

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})

export class CvComponent implements OnInit,OnDestroy {

  edus: Archieve[] = [];
  exps: Archieve[] = [];

  ed1: Archieve = {
    year:'2010 - 2014',
    university: 'Duoc UC Viña del mar',
    title: 'Titulado de Ingeniería en Informática',
    desc: '',
    tipo: 'edu',
    img: 'assets/img/duoc.png',
    url: 'http://www.duoc.cl/inicio'

  };
  ed2: Archieve = {
    year:'2018 - 2018',
    university: 'Duoc UC Viña del mar',
    title: 'Titulado de Ingeniería en Informática',
    desc: '',
    tipo: 'edu',
    img: 'assets/img/duoc.png',
    url:'http://www.duoc.cl/inicio'
  };
  ex1: Archieve = {
    year:'2010 - 2014',
    university: 'Woodtech',
    title: 'Internship',
    desc: 'I developed a project called SRS (Segmentation Review System), which allows you to review the segmentation of captures of trucks loaded with wood.',
    tipo: 'exp',
    img: 'assets/img/woodtech.webp',
    url: 'http://www.woodtechms.com/'
  };
  ex2: Archieve = {
    year:'2014 - 2016',
    university: 'Woodtech',
    title: 'Junior Software Engineer',
    desc: 'Team member of OyS (Operations and services), i worked in the continuous improvement of the software delivered to Woodtech\'s customers. My functions were develop software, create reports of log measures for a sawmill located in the USA.',
    tipo: 'exp',
    img: 'assets/img/woodtech.webp',
    url:'http://www.woodtechms.com/'
  };
  ex3: Archieve = {
    year:'2019 - 2020',
    university: 'Readiness IT',
    title: 'Trainee',
    desc: 'During 4 months, i learned HTML5, CSS, GIT, Angular y EOC (Ericsson Order Care) a technology used as Back-End to manage the operations of many external systems, also developed a simple web site simulating a shop with a shopping cart system using Angular. Then, i traveled to Fundao, Portugal for 1 month to learn how operates the development team in Portugal. Currently, im working at the bot team, solving issues that happens at production in the system OneClick.',
    tipo: 'exp',
    img: 'https://readinessit.com/wp-content/uploads/2019/06/Logo_ReadinessIT_beyond_digital_experience-01.png',
    url: 'https://readinessit.com/'
  };

  constructor() { }

  ngOnInit() {
    this.populate();

  }
  ngOnDestroy(): void {
    this.clean();
  }

  populate(){
    this.edus.push(this.ed1);
    this.edus.push(this.ed2);
    this.exps.push(this.ex1);
    this.exps.push(this.ex2);
    this.exps.push(this.ex3);
  }

  clean(){
    this.exps = [];
  }




}
