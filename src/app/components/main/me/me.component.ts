import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  fes: { nombre: string, type: string, url: string, ancho: string, alto: string }[] = [];
  bes: { nombre: string, type: string, url: string, ancho: string, alto: string }[] = [];
  langs: { nombre: string, type: string, url: string, ancho: string, alto: string }[] = [];
  dbs: { nombre: string, type: string, url: string, ancho: string, alto: string }[] = [];
  constructor() { }

  tech2 = { nombre: 'HTML5', type: 'FE', url: 'assets/img/techs/html5.png', ancho: '35', alto: '40' };
  tech3 = { nombre: 'CSS3', type: 'FE', url: 'assets/img/techs/css3.png', ancho: '35', alto: '40' };
  tech4 = { nombre: 'BOOTSTRAP', type: 'FE', url: 'assets/img/techs/bootstrap.png', ancho: '40', alto: '40' };
  tech5 = { nombre: 'MATERIAL DESIGN', type: 'FE', url: 'assets/img/techs/mt.png', ancho: '40', alto: '40' };
  tech1 = { nombre: 'ANGULAR 8', type: 'FE', url: 'assets/img/techs/angular.svg', ancho: '40', alto: '40' };
  tech6 = { nombre: 'SPRING', type: 'BE', url: 'assets/img/techs/spring.png', ancho: '40', alto: '40' };
  tech7 = { nombre: 'JAVASCRIPT', type: 'LANG', url: 'assets/img/techs/js.png', ancho: '40', alto: '40' };
  tech8 = { nombre: 'TYPESCRIPT', type: 'LANG', url: 'assets/img/techs/typescript.png', ancho: '40', alto: '40' };
  tech9 = { nombre: 'JAVA', type: 'LANG', url: 'assets/img/techs/java.png', ancho: '40', alto: '40' };
  tech10 = { nombre: '', type: 'DB', url: 'assets/img/techs/mysql.png', ancho: '130', alto: '70' };
  tech11 = { nombre: '', type: 'DB', url: 'assets/img/techs/oracle.png', ancho: '130', alto: '30' };

  imagePathFacebook: string = 'assets/icon/facebook.png';
  imagePathGmail: string = 'assets/icon/gmail.png';
  imagePathLinkedin: string = 'assets/icon/linkedin.png';
  imagePathInstagram: string = 'assets/icon/instagram.png';
  imagePathGithub: string = 'assets/icon/github.png';

  ngOnInit() {
    this.populate();
  }

  populate() {
    this.fes.push(this.tech1);
    this.fes.push(this.tech2);
    this.fes.push(this.tech3);
    this.fes.push(this.tech4);
    this.fes.push(this.tech5)
    this.bes.push(this.tech6)
    this.langs.push(this.tech7)
    this.langs.push(this.tech8)
    this.langs.push(this.tech9)
    this.dbs.push(this.tech10);
    this.dbs.push(this.tech11);
  }

  downloadFile() {
    window.open('/assets/doc/GiusseppeVR_ES_CV.pdf', '_blank');
  }
}
