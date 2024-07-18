export default function createReportObject(employeesList) {
  class ReportObject {
    constructor() {
      this.allEmployees = employeesList;
    }

    // eslint-disable-next-line class-methods-use-this
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    }
  }
  return new ReportObject();
}
