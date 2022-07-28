const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees.find((element) =>
    [element.firstName, element.lastName].includes(employeeName));
}
// console.log(getEmployeeByName('Burl'));
module.exports = getEmployeeByName;
