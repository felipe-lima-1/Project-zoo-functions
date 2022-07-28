const data = require('../data/zoo_data');

function countAnimals(animal) {
  const felipe = {};
  if (!animal) {
    data.species.forEach((specie) => {
      felipe[specie.name] = specie.residents.length;
    });
    return felipe;
  }
  // const { specie: NomeEspecie, sex = sexo } = animal;
}

console.log(countAnimals());
module.exports = countAnimals;
