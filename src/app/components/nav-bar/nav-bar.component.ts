import { Component, OnInit } from '@angular/core';
import { faPhone, faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  faPhone = faPhone;
  faBars = faBars;
  isMenuOpen = false;

  ngOnInit(): void {
    window.onscroll = () => {this.onWindowScroll()};
  }

  displayMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onWindowScroll() {
    if (document.body.clientWidth > 600) {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav-bar").style.background = "rgb(88,88,88)";
        document.getElementById("nav-bar").style.boxShadow = "0px -1px 12px -2px rgba(0,0,0,0.75)";
      } else {
        document.getElementById("nav-bar").style.background = "rgb(88,88,88,0.6)";
        document.getElementById("nav-bar").style.boxShadow = "none";
        document.getElementById("nav-bar").style.transition = ".4s";
      }
    }
}

}