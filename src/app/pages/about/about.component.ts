import { Component, OnInit } from '@angular/core';
import { aboutData } from '../../../assets/data/about-data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about;

  ngOnInit(): void {
    this.about = aboutData
  }


}
