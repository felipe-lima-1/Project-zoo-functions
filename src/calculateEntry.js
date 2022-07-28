const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const idadeGrupo = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((element) => {
    if (element.age < 18) {
      idadeGrupo.child += 1;
    } else if (element.age >= 50) {
      idadeGrupo.senior += 1;
    } else { idadeGrupo.adult += 1; }
  });
  return idadeGrupo;
}
// console.log(countEntrants());
function calculateEntry(entrants) {
  // const vazio = {};
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }
  const getChild = entrants.filter((child) => child.age < 18).length;
  const getAdult = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const getSenior = entrants.filter((senior) => senior.age >= 50).length;
  // const grupo = countEntrants(entrants);
  const preco = data.prices;
  const total = (getChild * preco.child) + (getAdult * preco.adult) + (getSenior * preco.senior);
  // (getChild * data.prices.child) + (getAdult * data.prices.adult)
  // + (getSenior * data.prices.senior);
  return total;
}
// console.log(calculateEntry());
module.exports = { calculateEntry, countEntrants };
