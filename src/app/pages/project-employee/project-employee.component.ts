import { Component, inject, OnInit, signal } from '@angular/core';
import {
  IProject,
  IProjectEmployee,
} from '../../../models/interface/masterInterface';
import { MasterService } from '../../../services/master.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../../models/class/Employee';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-project-employee',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './project-employee.component.html',
  styleUrl: './project-employee.component.scss',
})
export class ProjectEmployeeComponent implements OnInit {
  empProjectLists = signal<IProjectEmployee[]>([]);

  masterServ = inject(MasterService);

  projLists$: Observable<IProject[]> = new Observable<IProject[]>();

  empLists$: Observable<Employee[]> = new Observable<Employee[]>();

  empProjForm: FormGroup = new FormGroup({});

  constructor() {
    this.intializeEmpProj();
    this.projLists$ = this.masterServ.getProjectLists();
    this.empLists$ = this.masterServ.getEmployeeLists();
  }

  ngOnInit(): void {
    this.loadAllEmpProjects();
  }

  intializeEmpProj() {
    this.empProjForm = new FormGroup({
      empProjectId: new FormControl(0),
      empId: new FormControl(0),
      assignedDate: new FormControl(''),
      role: new FormControl(''),
      isActive: new FormControl(false),
    });
  }

  loadAllEmpProjects() {
    this.masterServ
      .getProjectEmployeeLists()
      .subscribe((res: IProjectEmployee[]) => {
        this.empProjectLists.set(res);
      });
  }

  onSaveEmpProj() {
    debugger;
    const EmpProjForm = this.empProjForm.value;
    this.masterServ.createProjectEmployee(EmpProjForm).subscribe(
      (res) => {
        alert('EmployeeProject Created successfully');
      },
      (error) => {
        alert(error.message);
      }
    );
  }

  onEdit(empProjData: IProjectEmployee) {}

  onDelete(empProjId: number) {}
}
