import { Component, OnInit } from '@angular/core';
import { projectsData } from '../../../assets/data/projects';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects;

  constructor(private router: Router) { }  
  
  ngOnInit(): void {
    this.projects = projectsData
  }

  goToProject(id) {
    this.router.navigate([`/projects/${id}`])
  }
}
