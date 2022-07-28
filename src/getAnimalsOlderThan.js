const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const dadosAnimal = data.species.find((resident) => resident.name === animal);
  const idadeMinima = dadosAnimal.residents.every((residentAnimal) => residentAnimal.age >= age);
  return idadeMinima;
}

console.log(getAnimalsOlderThan('lions'));
module.exports = getAnimalsOlderThan;
