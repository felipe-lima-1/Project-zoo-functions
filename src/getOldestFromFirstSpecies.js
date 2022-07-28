const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(id) {
  // const personId = data.employees.find((element) => element.id === id);
  const idAnimal = employees.find((element) => element.id === id).responsibleFor[0];
  const selectedAnimal = species.filter((elemento) => elemento.id === idAnimal);
  const olderAnimal = selectedAnimal[0].residents.reduce((acc, resident) => {
    if (acc.age > resident.age) {
      return acc;
    } return resident;
  });
  const { age, name, sex } = olderAnimal;
  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
