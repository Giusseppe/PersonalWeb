import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Archieve {
  year: string;
  university: string;
  title: string;
  desc: string;
  tipo: string;
  img: string;
  url: string;
  duration?: string;
};

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})

export class CvComponent implements OnInit, OnDestroy {

  edus: Archieve[] = [];
  exps: Archieve[] = [];

  ed1: Archieve = {
    year: '2010 - 2014',
    university: 'Duoc UC Viña del mar',
    title: 'main.cv.education.edu1',
    desc: '',
    tipo: 'edu',
    img: 'assets/img/duoc.png',
    url: 'http://www.duoc.cl/inicio'

  };
  ed2: Archieve = {
    year: '2018 - 2018',
    university: 'Duoc UC Viña del mar',
    title: 'main.cv.education.edu2',
    desc: '',
    tipo: 'edu',
    img: 'assets/img/duoc.png',
    url: 'http://www.duoc.cl/inicio'
  };
  ex1: Archieve = {
    year: 'main.cv.experience.exp1.year',
    duration: 'main.cv.experience.exp1.duration',
    university: 'Woodtech',
    title: 'main.cv.experience.exp1.title',
    desc: 'main.cv.experience.exp1.desc',
    tipo: 'exp',
    img: 'assets/img/woodtech.webp',
    url: 'http://www.woodtechms.com/'
  };
  ex2: Archieve = {
    year: 'main.cv.experience.exp2.year',
    duration: 'main.cv.experience.exp2.duration',
    university: 'Woodtech',
    title: 'main.cv.experience.exp2.title',
    desc: 'main.cv.experience.exp2.desc',
    tipo: 'exp',
    img: 'assets/img/woodtech.webp',
    url: 'http://www.woodtechms.com/'
  };
  ex3: Archieve = {
    year: 'main.cv.experience.exp3.year',
    duration: 'main.cv.experience.exp3.duration',
    university: 'Readiness IT',
    title: 'main.cv.experience.exp3.title',
    desc: 'main.cv.experience.exp3.desc',
    tipo: 'exp',
    img: 'https://readinessit.com/wp-content/uploads/2019/06/Logo_ReadinessIT_beyond_digital_experience-01.png',
    url: 'https://readinessit.com/'
  };
  ex4: Archieve = {
    year: 'main.cv.experience.exp4.year',
    duration: 'main.cv.experience.exp4.duration',
    university: 'Novasis',
    title: 'main.cv.experience.exp4.title',
    desc: 'main.cv.experience.exp4.desc',
    tipo: 'exp',
    img: 'assets/img/novasis.png',
    url: 'http://www.novasis.cl/'
  };

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.populate();

  }
  ngOnDestroy(): void {
    this.clean();
  }

  populate() {
    this.edus.push(this.ed1);
    this.edus.push(this.ed2);
    this.exps.push(this.ex1);
    this.exps.push(this.ex2);
    this.exps.push(this.ex3);
    this.exps.push(this.ex4);
  }

  clean() {
    this.exps = [];
  }




}
