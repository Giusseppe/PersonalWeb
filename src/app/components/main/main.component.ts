import { Component, OnInit } from '@angular/core';
import { UdemyService } from 'src/app/udemy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  courses: any[];
  constructor(private udemyService: UdemyService) { }

  ngOnInit() {

    // this.udemyService.getCourses().subscribe(cursos => {
    //   this.courses = cursos;
    //   console.log(cursos);
    // });
  }

}
