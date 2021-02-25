import { Component, OnInit } from '@angular/core';
import { projectsData } from '../../../assets/data/projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-projects',
  templateUrl: './homepage-projects.component.html',
  styleUrls: ['./homepage-projects.component.scss']
})
export class HomepageProjectsComponent implements OnInit {
  projects;

  constructor(private router: Router) { }  
  
  ngOnInit(): void {
    this.projects = projectsData
  }

  goToProjects() {
    this.router.navigate(['/projects'])
  }

  goToProject(id) {
    this.router.navigate([`/projects/${id}`])
  }

}
