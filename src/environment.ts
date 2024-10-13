export const environment = {
  production: false,
  baseURL: 'https://projectapi.gerasim.in/api/EmployeeManagement/',
};

export const endpointURLS = {
  parentDepartmentLists: 'GetParentDepartment',
  childDepartmentLists: 'GetChildDepartmentByParentId',
  //Employees Endpoints
  createEmployee: 'CreateEmployee',
  employeeLists: 'GetAllEmployees',
  updateEmployee: 'UpdateEmployee',
  deleteEmployee: 'DeleteEmployee',
  //Projects Endpoints
  createProject: 'CreateProject',
  getAllProjects: 'GetAllProjects',
  getProjById: 'GetProject',
  updateProject: 'UpdateProject',
  deleteProject: 'DeleteProject',
};
