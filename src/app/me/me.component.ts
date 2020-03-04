import { Component, OnInit } from '@angular/core';
import { UdemyService } from '../udemy.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  techs: {nombre:string, url:string,ancho:string}[] = [];
  courses: any[];
  constructor(private udemyService: UdemyService) { }

  tech1={nombre: 'HTML5',url :'assets/img/techs/html5.png',ancho: '80'};
  tech2={nombre: 'CSS3',url :'assets/img/techs/css3.png',ancho: '80'};
  tech3={nombre: 'BOOTSTRAP',url :'assets/img/techs/bootstrap.png',ancho: '80'};
  tech4={nombre: 'JAVASCRIPT',url :'assets/img/techs/js.png',ancho: '80'};
  tech5={nombre: 'TYPESCRIPT',url :'assets/img/techs/typescript.png',ancho: '80'};
  tech6={nombre: 'ANGULAR 8',url :'assets/img/techs/angular.svg',ancho: '80'};
  tech7={nombre: 'JAVA',url :'assets/img/techs/java.png',ancho: '80'};
  tech8={nombre: 'SPRING',url :'assets/img/techs/spring.png',ancho: '80'};
  tech9={nombre: 'MYSQL',url :'assets/img/techs/mysql.png',ancho: '120'};
  tech10={nombre: 'ORACLE',url :'assets/img/techs/oracle.png',ancho: '120'};

  ngOnInit() {
    this.populate();
    this.udemyService.getCourses().subscribe(cursos => this.courses = cursos);
  }

  populate(){
    this.techs.push(this.tech1);
    this.techs.push(this.tech2);
    this.techs.push(this.tech3);
    this.techs.push(this.tech4);
    this.techs.push(this.tech5);
    this.techs.push(this.tech6);
    this.techs.push(this.tech7);
    this.techs.push(this.tech8);
    this.techs.push(this.tech9);
    this.techs.push(this.tech10);
  }
}
