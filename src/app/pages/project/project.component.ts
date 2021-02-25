import { Component, OnInit } from '@angular/core';
import { projectsData } from '../../../assets/data/projects';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from 'angular-gallery';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  project;
  images;


  constructor(private route: ActivatedRoute, private gallery: Gallery) { }

  ngOnInit(): void {
    let id: string;
    this.route.params.subscribe(res => id = res['id']);
    this.project = projectsData.find(project => project.id === id);
    this.images = this.project.pictures.map(img => { return {path: img}})
  }

  showGallery(index: number) {
    let prop = {
        images: this.images,
        index
      };
    this.gallery.load(prop);
  }


}
