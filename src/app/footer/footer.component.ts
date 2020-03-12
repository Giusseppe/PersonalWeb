import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerText: string='©2020 que sucede'
  imagePathFacebook: string = 'assets/icon/facebook.png';
  imagePathLinkedin: string = 'assets/icon/linkedin.png';
  imagePathInstagram: string = 'assets/icon/instagram.png';
  imagePathGithub: string = 'assets/icon/github.png';
  constructor() { }

  ngOnInit() {
  }

}
