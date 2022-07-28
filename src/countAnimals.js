const data = require('../data/zoo_data');

function countAnimals(animal) {
  const felipe = {};
  if (!animal) {
    data.species.forEach((specie) => {
      felipe[specie.name] = specie.residents.length;
    });
    return felipe;
  }
  const { specie: nomeEspecie, sex = 'sexo' } = animal;
  const especie = data.species.find((specie) => specie.name === nomeEspecie);
  if (sex === 'sexo') {
    return especie.residents.length;
  }
  return especie.residents.filter((individual) => individual.sex === sex).length;
}
// console.log(countAnimals());
module.exports = countAnimals;
