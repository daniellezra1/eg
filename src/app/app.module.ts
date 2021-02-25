import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PressComponent } from './pages/press/press.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectComponent } from './pages/project/project.component';
import { HomepageMainComponent } from './components/homepage-main/homepage-main.component';
import { HomepageServicesComponent } from './components/homepage-services/homepage-services.component';
import { HomepageClientsComponent } from './components/homepage-clients/homepage-clients.component';
import { HomepageProjectsComponent } from './components/homepage-projects/homepage-projects.component';
import { HomepageAboutComponent } from './components/homepage-about/homepage-about.component';
import { NgbdCarouselBasic } from './components/carousel-basic/carousel-basic.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {IvyGalleryModule} from 'angular-gallery';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    ProjectsComponent,
    PressComponent,
    ContactComponent,
    NavBarComponent,
    FooterComponent,
    ProjectComponent,
    HomepageMainComponent,
    HomepageServicesComponent,
    HomepageClientsComponent,
    HomepageProjectsComponent,
    HomepageAboutComponent,
    NgbdCarouselBasic
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    IvyGalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


