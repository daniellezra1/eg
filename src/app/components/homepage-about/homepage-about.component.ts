import { Component, OnInit } from '@angular/core';
import { aboutData } from '../../../assets/data/about-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-about',
  templateUrl: './homepage-about.component.html',
  styleUrls: ['./homepage-about.component.scss']
})
export class HomepageAboutComponent implements OnInit {
  about;

  constructor(private router: Router) { }  

  ngOnInit(): void {
    this.about = aboutData
  }

  goToAboutPage() {
    this.router.navigate(['/about'])
  }

}
