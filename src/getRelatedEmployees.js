const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((element) => element.managers.includes(id));
}
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const funcionario = data.employees.filter((manager) => manager.managers.includes(managerId));
  const resultado = funcionario.map((element) => `${element.firstName} ${element.lastName}`);
  return resultado;
}

// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
