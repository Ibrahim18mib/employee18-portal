import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../../services/master.service';
import { Observable } from 'rxjs';
import { Employee } from '../../../models/class/Employee';
import { AsyncPipe } from '@angular/common';
import {
  IApiresponse,
  IProject,
} from '../../../models/interface/masterInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.scss',
})
export class ProjectFormComponent {
  projectForm: FormGroup = new FormGroup({});
  emloyeeList$: Observable<Employee[]> = new Observable<[]>();

  masterServ = inject(MasterService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  constructor() {
    this.intializeProjectForm();
    this.emloyeeList$ = this.masterServ.getEmployeeLists();

    this.activatedRoute.params.subscribe((res: any) => {
      if (res?.id != 0) {
        this.getProjById(res.id);
      }
    });
  }

  intializeProjectForm(data?: IProject) {
    this.projectForm = new FormGroup({
      projectId: new FormControl(data ? data.projectId : 0),
      projectName: new FormControl(data ? data.projectName : ''),
      clientName: new FormControl(data ? data.clientName : ''),
      startDate: new FormControl(data ? data.startDate : ''),
      leadByEmpId: new FormControl(data ? data.leadByEmpId : 0),
      contactPerson: new FormControl(data ? data.contactPerson : ''),
      contactNo: new FormControl(data ? data.contactNo : ''),
      emailId: new FormControl(data ? data.emailId : ''),
    });
  }

  getProjById(projId: number) {
    this.masterServ.getProjectById(projId).subscribe(
      (res: IProject) => {
        console.log('Project Fetched by ID successfully');
        this.intializeProjectForm(res);
      },
      (error: any) => {
        alert(JSON.stringify(error.message));
      }
    );
  }

  onSaveProj() {
    const projFormValue = this.projectForm.value;
    this.masterServ.createProject(projFormValue).subscribe(
      (res: IProject) => {
        alert('Project Created successfully');
        this.projectForm.reset();
      },
      (error: any) => {
        alert(JSON.stringify(error.message));
      }
    );
  }

  onUpdateProj() {
    const projFormValue = this.projectForm.value;
    this.masterServ.updateProjectById(projFormValue).subscribe(
      (res: IApiresponse) => {
        alert('Project Updated successfully');
        this.router.navigateByUrl('/projects');
      },
      (error: any) => {
        alert(JSON.stringify(error.message));
      }
    );
  }
}
