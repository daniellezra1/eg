import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PressComponent } from './pages/press/press.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full' },
  {path: 'about', component: AboutComponent, pathMatch: 'full' },
  {path: 'projects', component: ProjectsComponent, pathMatch: 'full' },
  {path: 'projects/:id', component: ProjectComponent, pathMatch: 'full' },
  {path: 'press', component: PressComponent, pathMatch: 'full' },
  {path: 'contact', component: ContactComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


