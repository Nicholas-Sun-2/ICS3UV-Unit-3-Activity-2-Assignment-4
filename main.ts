/**
 * @author Nicholas Sun
 * @version 1.0.0
 * @date 2025-11-21
 * @fileoverview This program outputs a table showing the balance in the account at the end of each year for 10 years.
 */

// Declaring variables
const principalAsString : string = prompt("Enter a number of dollars:") || "0";
const principal : number = parseInt(principalAsString);

const interestRateAsString : string = prompt("Enter a percentage interest rate:") || "0";
const interestRate : number = parseInt(interestRateAsString);

// Calculation
const interestMultiplier : number = interestRate / 100;

const interestYear1 : number = principal * interestMultiplier;
const currentValueYear1 : number = principal + interestYear1;

const interestYear2 : number = currentValueYear1 * interestMultiplier;
const currentValueYear2 : number = currentValueYear1 + interestYear2;

const interestYear3 : number = currentValueYear2 * interestMultiplier;
const currentValueYear3 : number = currentValueYear2 + interestYear3;

const interestYear4 : number = currentValueYear3 * interestMultiplier;
const currentValueYear4 : number = currentValueYear3 + interestYear4;

const interestYear5 : number = currentValueYear4 * interestMultiplier;
const currentValueYear5 : number = currentValueYear4 + interestYear5;

const interestYear6 : number = currentValueYear5 * interestMultiplier;
const currentValueYear6 : number = currentValueYear5 + interestYear6;

const interestYear7 : number = currentValueYear6 * interestMultiplier;
const currentValueYear7 : number = currentValueYear6 + interestYear7;

const interestYear8 : number = currentValueYear7 * interestMultiplier;
const currentValueYear8 : number = currentValueYear7 + interestYear8;

const interestYear9 : number = currentValueYear8 * interestMultiplier;
const currentValueYear9 : number = currentValueYear8 + interestYear9;

const interestYear10 : number = currentValueYear9 * interestMultiplier;
const currentValueYear10 : number = currentValueYear9 + interestYear10;

// Printing
console.log("Year      Initial Value       Interest Gained     Current Value");
console.log(`${"1".padEnd(10)}${principal.toFixed(2).padEnd(20)}${interestYear1.toFixed(2).padEnd(20)}${currentValueYear1.toFixed(2).padEnd(20)}`);
console.log(`${"2".padEnd(10)}${principal.toFixed(2).padEnd(20)}${interestYear2.toFixed(2).padEnd(20)}${currentValueYear2.toFixed(2).padEnd(20)}`);
console.log(`${"3".padEnd(10)}${principal.toFixed(2).padEnd(20)}${interestYear3.toFixed(2).padEnd(20)}${currentValueYear3.toFixed(2).padEnd(20)}`);
console.log(`${"4".padEnd(10)}${principal.toFixed(2).padEnd(20)}${interestYear4.toFixed(2).padEnd(20)}${currentValueYear4.toFixed(2).padEnd(20)}`);
console.log(`${"5".padEnd(10)}${principal.toFixed(2).padEnd(20)}${interestYear5.toFixed(2).padEnd(20)}${currentValueYear5.toFixed(2).padEnd(20)}`);
console.log(`${"6".padEnd(10)}${principal.toFixed(2).padEnd(20)}${interestYear6.toFixed(2).padEnd(20)}${currentValueYear6.toFixed(2).padEnd(20)}`);
console.log(`${"7".padEnd(10)}${principal.toFixed(2).padEnd(20)}${interestYear7.toFixed(2).padEnd(20)}${currentValueYear7.toFixed(2).padEnd(20)}`);
console.log(`${"8".padEnd(10)}${principal.toFixed(2).padEnd(20)}${interestYear8.toFixed(2).padEnd(20)}${currentValueYear8.toFixed(2).padEnd(20)}`);
console.log(`${"9".padEnd(10)}${principal.toFixed(2).padEnd(20)}${interestYear9.toFixed(2).padEnd(20)}${currentValueYear9.toFixed(2).padEnd(20)}`);
console.log(`${"10".padEnd(10)}${principal.toFixed(2).padEnd(20)}${interestYear10.toFixed(2).padEnd(20)}${currentValueYear10.toFixed(2).padEnd(20)}`);
