import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre: string = "Giusseppe Veliz Rojas";
  cv: string = "Curriculum";
  portafolio: string = "Portafolio";
  ocio: string = "Ocio";

  constructor() { }

  ngOnInit() {
  }

}
