import { Component } from '@angular/core';
import { faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  faPhone = faPhone;
  faMailBulk = faMailBulk;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTiktok = faTiktok;
}
