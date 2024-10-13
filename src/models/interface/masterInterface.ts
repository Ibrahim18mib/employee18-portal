export interface IApiresponse {
  message: string;
  result: true;
  data: any;
}

export interface IparentDept {
  departmentId: number;
  departmentName: string;
  departmentLogo: string;
}

export interface IchildDept {
  childDeptId: number;
  parentDeptId: string;
  departmentName: string;
}

export interface IProject {
  projectId: number;
  projectName: string;
  clientName: string;
  startDate: string;
  leadByEmpId: number;
  contactNo: string;
  contactPerson: string;
  emailId: string;
}

export interface IProjectEmployee {
  empProjectId: number;
  projectId: number;
  empId: number;
  assignedDate: string;
  role: string;
  isActive: string;
}
