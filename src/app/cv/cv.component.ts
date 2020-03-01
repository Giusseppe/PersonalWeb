import { Component, OnInit, OnDestroy } from '@angular/core';

export interface Archieve{
  year:string;
  university:string;
  title:string;
  desc:string;
  tipo:string;
  img:string;
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
    title: 'Egresado de Ingeniería en Informática',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tipo: 'edu',
    img: 'http://www.duoc.cl/sites/default/files/logo-2019-.png'

  };
  ed2: Archieve = {
    year:'2018 - 2018',
    university: 'Duoc UC Viña del mar',
    title: 'Titulado de Ingeniería en Informática',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    tipo: 'edu',
    img: 'http://www.duoc.cl/sites/default/files/logo-2019-.png'
  };
  ex1: Archieve = {
    year:'2010 - 2014',
    university: 'Woodtech',
    title: 'Internship',
    desc: 'I developed a project called SRS (Segmentation Review System), which allows you to review the segmentation of captures of trucks loaded with wood.',
    tipo: 'exp',
    img: 'https://static.wixstatic.com/media/b374e6_ec2cf5f97cfc4d4792924597982b2a7f~mv2.png/v1/fill/w_277,h_59,al_c,q_85,usm_0.66_1.00_0.01/b374e6_ec2cf5f97cfc4d4792924597982b2a7f~mv2.webp'
  };
  ex2: Archieve = {
    year:'2014 - 2016',
    university: 'Woodtech',
    title: 'Junior Software Engineer',
    desc: 'Team member of OyS (Operations and services), i worked in the continuous improvement of the software delivered to Woodtech\'s customers. My functions were develop software, create reports of log measures for a sawmill located in the USA.',
    tipo: 'exp',
    img: 'https://static.wixstatic.com/media/b374e6_ec2cf5f97cfc4d4792924597982b2a7f~mv2.png/v1/fill/w_277,h_59,al_c,q_85,usm_0.66_1.00_0.01/b374e6_ec2cf5f97cfc4d4792924597982b2a7f~mv2.webp'
  };
  ex3: Archieve = {
    year:'2019 - 2020',
    university: 'Readiness IT',
    title: 'Trainee',
    desc: 'During 4 months, i learned HTML5, CSS, GIT, Angular y EOC (Ericsson Order Care) a technology used as Back-End to manage the operations of many external systems, also developed a simple web site simulating a shop with a shopping cart system using Angular. Then, i traveled to Fundao, Portugal for 1 month to learn how operates the development team in Portugal. Currently, im working at the bot team, solving issues that happens at production in the system OneClick.',
    tipo: 'exp',
    img: 'https://readinessit.com/wp-content/uploads/2019/06/Logo_ReadinessIT_beyond_digital_experience-01.png'
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
