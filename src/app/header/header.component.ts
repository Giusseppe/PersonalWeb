import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  nombre: string = "Giusseppe Veliz Rojas";
  me: string = "About me";
  cv: string = "Resume";
  portafolio: string = "Portafolio";
  ocio: string = "dumb stuff";
  contacto: string = "Contact";

  constructor() { }

  ngOnInit() {
  }

}
