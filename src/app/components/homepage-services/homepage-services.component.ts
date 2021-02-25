import { Component, OnInit } from '@angular/core';
import { aboutData } from '../../../assets/data/about-data';
import { faHardHat, faTools, faPencilRuler} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage-services',
  templateUrl: './homepage-services.component.html',
  styleUrls: ['./homepage-services.component.scss']
})
export class HomepageServicesComponent implements OnInit {
  about;
  icons = [faPencilRuler, faTools, faHardHat]
  
  ngOnInit(): void {
    this.about = aboutData
  }

}
