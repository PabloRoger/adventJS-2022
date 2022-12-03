/*
Reto #2: Nadie quiere hacer horas extra
*/

function countHours(year, holidays) {
  let counterDays = 0;

  holidays.map((date)=>{
    let newDate = new Date(year, parseInt(date.substring(0, 2)) - 1, date.substring(3, 5));
    if (newDate.getDay() > 0 && newDate.getDay() < 6) return counterDays++;
  });

  return counterDays*2;
}