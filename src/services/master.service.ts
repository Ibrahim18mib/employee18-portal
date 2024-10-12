import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpointURLS, environment } from '../environment';
import { Observable } from 'rxjs';
import { IApiresponse } from '../models/interface/masterInterface';
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
}
