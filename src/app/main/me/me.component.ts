import { Component, OnInit } from '@angular/core';
import { UdemyService } from '../../udemy.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  fes: {nombre:string, type: string,url:string,ancho:string}[] = [];
  bes: {nombre:string, type: string,url:string,ancho:string}[] = [];
  langs: {nombre:string, type: string,url:string,ancho:string}[] = [];
  dbs: {nombre:string, type: string,url:string,ancho:string}[] = [];
  constructor() { }

  tech1={nombre: 'HTML5',type: 'FE',url :'assets/img/techs/html5.png',ancho: '40'};
  tech2={nombre: 'CSS3',type: 'FE',url :'assets/img/techs/css3.png',ancho: '40'};
  tech3={nombre: 'BOOTSTRAP',type: 'FE',url :'assets/img/techs/bootstrap.png',ancho: '40'};
  tech4={nombre: 'ANGULAR 8',type: 'FE',url :'assets/img/techs/angular.svg',ancho: '40'};
  tech5={nombre: 'SPRING',type: 'BE',url :'assets/img/techs/spring.png',ancho: '40'};
  tech6={nombre: 'JAVASCRIPT',type: 'LANG',url :'assets/img/techs/js.png',ancho: '40'};
  tech7={nombre: 'TYPESCRIPT',type: 'LANG',url :'assets/img/techs/typescript.png',ancho: '40'};
  tech8={nombre: 'JAVA',type: 'LANG',url :'assets/img/techs/java.png',ancho: '40'};
  tech9={nombre: '',type: 'DB',url :'assets/img/techs/mysql.png',ancho: '110'};
  tech10={nombre: '',type: 'DB',url :'assets/img/techs/oracle.png',ancho: '130'};

  ngOnInit() {
    this.populate();
  }

  populate() {
    this.fes.push(this.tech1);
    this.fes.push(this.tech2);
    this.fes.push(this.tech3);
    this.fes.push(this.tech4);
    this.bes.push(this.tech5)
    this.langs.push(this.tech6)
    this.langs.push(this.tech7)
    this.langs.push(this.tech8)
    this.dbs.push(this.tech9);
    this.dbs.push(this.tech10);

  }
}
