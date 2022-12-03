/*
Reto #3: ¿Cuántas cajas de regalos puede llevar Papá Noel?
*/

function distributeGifts(packOfGifts, reindeers) {
  let weightGifts = 0;
  let weightReindeers = 0;

  packOfGifts.forEach((gift)=>{ weightGifts += gift.length; });
  reindeers.forEach((reindeer)=>{ weightReindeers += reindeer.length*2; });

  return Math.trunc(weightReindeers/weightGifts)
}