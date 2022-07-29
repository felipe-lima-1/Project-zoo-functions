const data = require('../data/zoo_data');

const { species, hours } = data;

function animalcath(element) {
  const animals = species.filter((animal) => animal.availability.includes(element));
  if (animals.length === 0) {
    return 'The zoo will be closed!';
  } return animals.map((animal) => animal.name);
}

function horario(element) {
  if (hours[element].open === 0) {
    return 'CLOSED';
  } return `Open from ${hours[element].open}am until ${hours[element].close}pm`;
}

function felipe(param) {
  const objeto = {};
  if (param === undefined) {
    Object.keys(hours).forEach((element) => {
      objeto[[element]] = { officeHour: horario(element), exhibition: animalcath(element) };
    });
  } else {
    objeto[[param]] = { officeHour: horario(param), exhibition: animalcath(param) };
  }
  return objeto;
}

function getSchedule(scheduleTarget) {
  const days = Object.keys(hours).find((day) => day === scheduleTarget);
  const animals = species.find((animal) => animal.name === scheduleTarget);
  if (scheduleTarget === undefined) {
    return felipe();
  } if (days !== undefined) {
    return felipe(scheduleTarget);
  } if (animals !== undefined) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  } return felipe();
}

module.exports = getSchedule;
