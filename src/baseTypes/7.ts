/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day0fWeek {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6
}

function isWeekend(day: Day0fWeek):Boolean {
  return day === Day0fWeek.Saturday || day === Day0fWeek.Sunday
}

console.log(isWeekend(Day0fWeek.Saturday))
console.log(isWeekend(Day0fWeek.Sunday))
console.log(isWeekend(Day0fWeek.Monday))