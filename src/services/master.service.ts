import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpointURLS, environment } from '../environment';
import { Observable } from 'rxjs';
import {
  IApiresponse,
  IProject,
  IProjectEmployee,
} from '../models/interface/masterInterface';
import { Employee } from '../models/class/Employee';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  http = inject(HttpClient);

  getParentDepartment(): Observable<IApiresponse> {
    return this.http.get<IApiresponse>(
      `${environment.baseURL}${endpointURLS.parentDepartmentLists}`
    );
  }

  getChildDeptById(parentDeptId: number): Observable<IApiresponse> {
    return this.http.get<IApiresponse>(
      `${environment.baseURL}${endpointURLS.childDepartmentLists}?deptId=` +
        parentDeptId
    );
  }

  getEmployeeLists(): Observable<Employee[]> {
    return this.http.get<Employee[]>(
      `${environment.baseURL}${endpointURLS.employeeLists}`
    );
  }

  createEmployee(empObj: Employee): Observable<IApiresponse> {
    return this.http.post<IApiresponse>(
      `${environment.baseURL}${endpointURLS.createEmployee}`,
      empObj
    );
  }

  updateEmployee(empObj: Employee): Observable<IApiresponse> {
    return this.http.put<IApiresponse>(
      `${environment.baseURL}${endpointURLS.updateEmployee}/` +
        empObj.employeeId,
      empObj
    );
  }

  deleteEmployeeById(empId: number): Observable<IApiresponse> {
    return this.http.delete<IApiresponse>(
      `${environment.baseURL}${endpointURLS.deleteEmployee}/` + empId
    );
  }

  //Projects
  createProject(projObj: IProject): Observable<IProject> {
    return this.http.post<IProject>(
      `${environment.baseURL}${endpointURLS.createProject}`,
      projObj
    );
  }

  getProjectLists(): Observable<IProject[]> {
    return this.http.get<IProject[]>(
      `${environment.baseURL}${endpointURLS.getAllProjects}`
    );
  }

  getProjectById(projId: number): Observable<IProject> {
    return this.http.get<IProject>(
      `${environment.baseURL}${endpointURLS.getProjById}/` + projId
    );
  }

  updateProjectById(projObj: IProject): Observable<IApiresponse> {
    return this.http.put<IApiresponse>(
      `${environment.baseURL}${endpointURLS.updateProject}/` +
        projObj.projectId,
      projObj
    );
  }

  deleteProjectById(projId: number): Observable<IApiresponse> {
    return this.http.delete<IApiresponse>(
      `${environment.baseURL}${endpointURLS.deleteProject}/` + projId
    );
  }

  //projects-Employeee
  getProjectEmployeeLists(): Observable<IProjectEmployee[]> {
    return this.http.get<IProjectEmployee[]>(
      `${environment.baseURL}${endpointURLS.getAllEmpProjects}`
    );
  }

  createProjectEmployee(
    projObj: IProjectEmployee
  ): Observable<IProjectEmployee> {
    return this.http.post<IProjectEmployee>(
      `${environment.baseURL}${endpointURLS.createEmpProject}`,
      projObj
    );
  }

  updateProjectEmployeeById(
    projObj: IProjectEmployee
  ): Observable<IProjectEmployee> {
    return this.http.put<IProjectEmployee>(
      `${environment.baseURL}${endpointURLS.updateEmpProjectById}/` +
        projObj.projectId,
      projObj
    );
  }

  deleteProjectEmployeeById(projId: number): Observable<IProjectEmployee> {
    return this.http.delete<IProjectEmployee>(
      `${environment.baseURL}${endpointURLS.deletEmpProjectById}/` + projId
    );
  }

  //getDashboardData
  getDashboardData(): Observable<any> {
    return this.http.get<any>(
      `${environment.baseURL}${endpointURLS.getDashboardData}`
    );
  }
}
