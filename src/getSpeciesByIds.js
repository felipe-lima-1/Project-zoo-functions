const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((especies) => ids.find((id) => id === especies.id));
}
console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

module.exports = getSpeciesByIds;
