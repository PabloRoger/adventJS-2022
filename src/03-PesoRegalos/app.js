/*
Reto #3: ¿Cuántas cajas de regalos puede llevar Papá Noel?
*/

function distributeGifts(packOfGifts, reindeers) {
  let weightGifts = 0;
  let weightReindeers = 0;

  const calculatorWeight = (arr,desc) => {
    if (desc == 'gifts'){
      arr.forEach((gift) => { return weightGifts += gift.length; });
    }

    if (desc == 'reindeers'){
      arr.forEach((reindeer) => { return weightReindeers += (2 * reindeer.length); });
    }
  }

  calculatorWeight(packOfGifts, 'gifts');
  calculatorWeight(reindeers, 'reindeers');

  return Math.trunc(weightReindeers/weightGifts)
}