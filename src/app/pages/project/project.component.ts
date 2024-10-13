import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MasterService } from '../../../services/master.service';
import { IProject } from '../../../models/interface/masterInterface';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent implements OnInit {
  masterServ = inject(MasterService);
  public projectsLists = signal<IProject[]>([]);

  router = inject(Router);

  ngOnInit(): void {
    this.loadAllProjects();
  }

  loadAllProjects() {
    debugger;
    this.masterServ.getProjectLists().subscribe((res: IProject[]) => {
      this.projectsLists.set(res);
    });
  }

  onEdit(projId: number) {
    this.router.navigate(['project-form', projId]);
  }

  onDelete(projId: number) {
    const deleteConfirm = confirm('Are you sure you want to Delete?');
    if (deleteConfirm) {
      this.masterServ.deleteProjectById(projId).subscribe(
        (res) => {
          alert('Project Deleted Successfully');
          this.loadAllProjects();
        },
        (error) => {
          alert('Error While Deleting Project');
        }
      );
    }
  }
}
