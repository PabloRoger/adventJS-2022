/*
Reto #1: ¡Automatizando envolver regalos de navidad!
*/

function wrapping(gifts) {
  let arrayRegalos = [];

  gifts.map((regalo) => {
    let papelRegalo = '*'.repeat(regalo.length+2);
    arrayRegalos.push(`${papelRegalo}\n*${regalo}*\n${papelRegalo}`);
  });

  return arrayRegalos;
}