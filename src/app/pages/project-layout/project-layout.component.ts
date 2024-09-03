import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from 'src/app/firestore.service';
import { Project } from '../proyectos/proyectos.component';

@Component({
  selector: 'app-project-layout',
  templateUrl: './project-layout.component.html',
  styleUrls: ['./project-layout.component.css'],
})
export class ProjectLayoutComponent implements OnInit {
  private idProject!: string;
  public dataProject!: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afs: FirestoreService
  ) {}

  ngOnInit(): void {
    this.idProject = this.decodeID(this.route.snapshot.params['idProject']);

    this.afs.getProjectsByID(this.idProject).subscribe(
      (res) => {
        if (!!res) {
          this.dataProject = res;
        } else {
          this.router.navigate(['/proyectos']);
        }
      },
      (error) => {
        console.error(error);
        this.router.navigate(['/proyectos']);
      }
    );
  }

  private decodeID(id: string): string {
    return atob(id);
  }
}
