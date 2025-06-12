// let js = "amazing";
// if (js === "amazing") alert("JavaScript is fun");
// console.log(40 + 8 + 23 - 10);

// console.log("jonas");
// console.log("23");
// let firstname = "Jonas";
// console.log(firstname);

// true;
// console.log(true);
// let age = 30;
// age = 31;
// const birthYear = 1991;
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// const firstName = "Jonas";
// const lastName = "Schmedtmann";
// console.log(firstName + " " + lastName);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const averageAge = ageJonas + ageSarah / 2;
// console.log(ageJonas, ageSarah, averageAge);

// teskt

// const firstName = "Jonas";
// const job = "teacher";
// const brithYear = 1991;
// const year = 2037;
// const Jonas =
//   " I 'm " +
//   firstName +
//   ", a " +
//   (year - brithYear) +
//   " " +
//   "years old" +
//   " " +
//   job +
//   "!";
// console.log(Jonas);

// downloading driving license information

// const age = 14;

// if (age >= 18) {
//   console.log(`Drive licence good`);
// } else {
//   const yearsLeft = 18 - age;
//   console.log(yearsLeft + ` years l

// Equality operators == vs ===

// const age = "18";
// if (age === 18) console.log("you just became an adult (strick) ");
// if (age == 18) console.log("you just became an adult (loose) ");
// const favourite = Number(prompt("What's your favourite number?"));
// if (favourite === 23) {
//   console.log("23 correct");
// } else if (favourite === 7) {
//   console.log("7 is to good number");
// } else {
//   console.log("wrong number");
// }
// if (favourite !== 23) console.log("musi byc 23");

// LOGICAL OPERATORS

// const hasDriversLicence = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// // if (hasDriversLicence && hasGoodVision) {
// //   console.log("CAN DRIVE");
// // } else {
// //   console.log("cant drive");
// // }
// const isTired = true;
// console.log(hasDriversLicence && hasGoodVision && !isTired);

// if (hasDriversLicence && hasGoodVision) {
//   console.log("CAN DRIVE");
// } else {
//   console.log("cant drive");
// }
// TEST

/* Write your code below. Good luck! 🙂 */
// const scoreDeophins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log("scoreDeophins:", scoreDeophins);
// console.log("scoreKoalas:", scoreKoalas);

// if (scoreDeophins > scoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else {
//   console.log("Koalas win the trophy");
// }
// const day = "monday";
// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("GO to coding meetup");
//     break;
//   case "thuesday":
//     console.log("Prepare theory viedos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("Record viedos");
//     break;
//   case "saturady":
//   case "sunday":
//     console.log("Enjoy the weekend");
// }

// TERNARY

const age = 23;
age >= 18
  ? console.log(" i like drink wine")
  : console.log("I like to drink water");

// TEST CREATE CALCULATE BILL AND TIP AND TOTAL TOTAL VALUE

const bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
let total = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
);
