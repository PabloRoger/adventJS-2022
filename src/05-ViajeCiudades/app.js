/*
Reto #5: Optimizando viajes de Santa
*/

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  let res = 0;
  const maxTravel = (nums, path) => {
      let sum = 0
      // Recorremos los elementos de path,
      // incrementando la variable sum con el valor de la suma de los elementos
      path.forEach( item => {
        sum += item
      });

      if (sum > res && sum <= maxGifts){
        res = sum
      }
      // Recorremos el array giftsCities y añadimos cada elemento a path
      nums.forEach((item, i) => {
          path.push(item);
          // Aplicamos recursividad
          if (path.length <= maxCities){
            maxTravel(nums.slice(i + 1), path);
          }
          // Eliminamos la última posición
          path.pop(item);
      })
  }
  maxTravel(giftsCities, []);
  return res;
}