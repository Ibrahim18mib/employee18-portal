import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../../services/master.service';

import {
  IApiresponse,
  IchildDept,
  IparentDept,
} from '../../../models/interface/masterInterface';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/class/Employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
})
export class EmployeeComponent implements OnInit {
  public isFormVisible = signal<boolean>(false);
  public parentDepartmentLists = signal<IparentDept[]>([]);
  public allEmployees = signal<Employee[]>([]);
  public childDepartmentLists = signal<IchildDept[]>([]);
  public parentDeptId: number = 0;

  employeeObj: Employee = new Employee();

  employeeServ = inject(MasterService);

  ngOnInit(): void {
    this.loadParentDepartments();
    this.getallEmployees();
  }

  loadParentDepartments() {
    this.employeeServ.getParentDepartment().subscribe(
      (res: IApiresponse) => {
        console.log(res, 'REsultParent Department');
        if (res) {
          this.parentDepartmentLists.set(res?.data);
        }
      },
      (error) => {
        alert(error);
      }
    );
  }

  getallEmployees() {
    this.employeeServ.getEmployeeLists().subscribe(
      (res: Employee[]) => {
        this.allEmployees.set(res);
      },
      (error) => {
        alert('Employee Error While Getting');
      }
    );
  }

  onParentDeptChange() {
    this.employeeServ.getChildDeptById(this.parentDeptId).subscribe(
      (res: IApiresponse) => {
        console.log(res, 'ChildREsultbyId');
        this.childDepartmentLists.set(res?.data);
      },
      (error) => {
        alert(JSON.stringify(error.message));
        // alert(JSON.parse(error));
      }
    );
  }

  onSave() {
    debugger;
    this.employeeObj.createdDate = '2024-10-12T14:12:10.046Z';
    this.employeeServ.createEmployee(this.employeeObj).subscribe(
      (res: IApiresponse) => {
        alert('Employee Created successfully');
      },
      (error: any) => {
        alert(JSON.stringify(error.message));
      }
    );
  }

  onEdit(data: Employee) {
    this.employeeObj = data;
    this.isFormVisible.set(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onUpdate() {
    this.employeeObj.createdDate = '2024-10-12T14:12:10.046Z';
    this.employeeServ.updateEmployee(this.employeeObj).subscribe(
      (res: IApiresponse) => {
        alert('Employee Updated successfully');
        this.getallEmployees();
        this.isFormVisible.set(false);
        this.employeeObj = new Employee();
      },
      (error: any) => {
        alert(JSON.stringify(error.message));
      }
    );
  }

  onDelete(empId: number) {
    const deleteConfirm = confirm('Are you sure you want to Delete?');
    if (deleteConfirm) {
      this.employeeServ.deleteEmployeeById(empId).subscribe(
        (res) => {
          alert('Employee Deleted Successfully');
          this.getallEmployees();
          this.employeeObj = new Employee();
        },
        (error) => {
          alert('Error While Deleting Employee');
        }
      );
    }
  }
}
