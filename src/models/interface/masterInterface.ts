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
