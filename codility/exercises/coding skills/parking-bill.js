/**
 * 1. ParkingBill
Given two strings representing times of entry and exit from a car parking lot, find the cost of the ticket according to the given billing rules.
Task Score
100%
Correctness
100%
Performance
Not assessed
Task description
You parked your car in a parking lot and want to compute the total cost of the ticket. The billing rules are as follows:

The entrance fee of the car parking lot is 2;
The first full or partial hour costs 3;
Each successive full or partial hour (after the first) costs 4.
You entered the car parking lot at time E and left at time L. In this task, times are represented as strings in the format "HH:MM" (where "HH" is a two-digit number between 0 and 23, which stands for hours, and "MM" is a two-digit number between 0 and 59, which stands for minutes).

Write a function:

function solution(E, L);

that, given strings E and L specifying points in time in the format "HH:MM", returns the total cost of the parking bill from your entry at time E to your exit at time L. You can assume that E describes a time before L on the same day.

For example, given "10:00" and "13:21" your function should return 17, because the entrance fee equals 2, the first hour costs 3 and there are two more full hours and part of a further hour, so the total cost is 2 + 3 + (3 * 4) = 17. Given "09:42" and "11:42" your function should return 9, because the entrance fee equals 2, the first hour costs 3 and the second hour costs 4, so the total cost is 2 + 3 + 4 = 9.

Assume that:

strings E and L follow the format "HH:MM" strictly;
string E describes a time before L on the same day.
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
 */

function solution(E, L) {
  // write your code in JavaScript (Node.js 8.9.4)
  let entranceHour = Number(E.slice(0, 2));
  let leftHour = Number(L.slice(0, 2));

  let entranceMin = Number(E.slice(3));
  let leftMin = Number(L.slice(3));

  let totalHour = null;

  totalHour = leftHour - entranceHour;

  if (totalHour < 1) {
    return 5;
  } else if (totalHour === 1 && leftMin - entranceMin === 0) {
    return 5;
  } else if (totalHour === 1 && leftMin - entranceMin > 0) {
    return 9;
  } else if (totalHour === 1 && leftMin - entranceMin !== 0) {
    return 5;
  }

  let exceeded = totalHour - 1;
  if (leftMin - entranceMin > 0) exceeded = exceeded + 1;

  return 5 + exceeded * 4;
}

//* other solution
function solution(E, L) {
  // write your code in JavaScript (Node.js 8.9.4)
  const start = new Date(`2022-08-08 ${E}`);
  const end = new Date(`2022-08-08 ${L}`);

  const diff = end.getTime() - start.getTime();
  const totalMinutes = diff / (60 * 1000); // (seconds*miliseconds)= result in minutes
  //for result in hours (seconds*minutes*miliseconds) (60*60*1000)

  if (totalMinutes < 60) return 5;

  if (totalMinutes >= 60) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    const ticket = 2;
    let firstFull = 0;
    let exceed = 0;

    if (hours === 1) firstFull = 3;
    if (hours > 1) {
      firstFull = 3;
      exceed = (hours - 1) * 4;
    }

    if (minutes > 0) exceed += 4;

    return ticket + firstFull + exceed;
  }
}

//*Other solution
const start = new Date(`2022-09-21 ${E}`);
const end = new Date(`2022-09-21 ${L}`);

let totalMinutes = (end.getTime() - start.getTime()) / (1000 * 60);

if (totalMinutes <= 60) return 5;

//*first full
//if totalMinutes > 60min there's one first full or partial
const firstFull = 3;
totalMinutes -= 60;

//*extra
let extra = 0;
if (totalMinutes > 0) {
  //if totalMinutes = 0, there's no extra
  if (totalMinutes >= 60) {
    const total = Math.ceil(totalMinutes / 60);
    extra = total * 4;
  } else {
    extra = 4;
  }
}

return 2 + firstFull + extra;

//? Best
function solution(E, L) {
  // write your code in JavaScript (Node.js 14)
  const start = new Date(`2022-11-25 ${E}`);
  const end = new Date(`2022-11-25 ${L}`);

  let totalMinutes = (end.getTime() - start.getTime()) / (1000 * 60);

  let ticket = 2 + 3;

  if (totalMinutes <= 60) return ticket;

  totalMinutes -= 60;

  const extra = Math.ceil(totalMinutes / 60);
  return ticket + extra * 4;
}
