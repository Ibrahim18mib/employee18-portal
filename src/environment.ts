export const environment = {
  production: false,
  baseURL: 'https://projectapi.gerasim.in/api/EmployeeManagement/',
};

export const endpointURLS = {
  parentDepartmentLists: 'GetParentDepartment',
  childDepartmentLists: 'GetChildDepartmentByParentId',
  createEmployee: 'CreateEmployee',
  employeeLists: 'GetAllEmployees',
  updateEmployee: 'UpdateEmployee',
  deleteEmployee: 'DeleteEmployee',
};
