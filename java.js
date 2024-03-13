// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

////////////////////////////////////////////MATH PROBLEMS////////////////////////////////////////////////////

//1.
const allDivisibleBy5 =
  n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;

console.log("Are all numbers divisible by 5?", allDivisibleBy5);

//2.
const isFirstLargerThanLast = n1 > n4;

console.log("Is the first number larger than the last?", isFirstLargerThanLast);

//3.
const arithmeticChain = ((n2 - n1) * n3) % n4;

console.log("The result of the arithmetic chain is", arithmeticChain);

//4.
const isAllUnder26 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

//const isValid = isSum50 && isTwoOdd && sAllUnder26 && isUnique;// (is answer)

console.log("Are the numbers umder 26?", isAllUnder26);



////////////////////////////////////////////MATH PROBLEMS END/////////////////////////////////////////////////

////////////////////////////////////////////CAR TRIP PROGRAM//////////////////////////////////////////////////

const distance = 1500;
const fuelEff55= 30;
const fuelEff60= 28;
const fuelEff75= 23;
const budget= 175;
const costPerGallon= 3;
 

//1.

// 1500 at 55
const distance55= (distance/fuelEff55);

console.log("This is how many gallons of gas you need for the trip at 55 mph.", distance55);
// 1500 at 60
const distance60= (distance/fuelEff60);

console.log("This is how many gallons of gas you need for the trip at 55 mph.", distance60);
// 1500 at 75
const distance75= (distance/fuelEff75);

console.log("This is how many gallons of gas you need for the trip at 55 mph.", distance75);

//2.
// 1500 at 55
const distanceCost55= (distance/fuelEff55)*costPerGallon;
console.log("Yes, $",distanceCost55, "is enough to cover the cost of the entire trip.");


// 1500 at 60
const distanceCost60= (distance/fuelEff60)*costPerGallon;
console.log("Yes, $",distanceCost60, "is enough to cover the cost of the entire trip.");

// 1500 at 75
const distanceCost75= (distance/fuelEff75)*costPerGallon;
console.log("No, $",distanceCost75, "is not enough to cover the cost of the entire trip.");


//3.

const compare1 = distanceCost55<budget;
console.log("True or False, at 55 mph will you complete the trip with $175?", compare1)

const compare2 = distanceCost60<budget;
console.log("True or False, at 60 mph will you complete the trip with $175?", compare2)

const compare3 = distanceCost75<budget;
console.log("True or False, at 75 mph will you complete the trip with $175?", compare3)


////////////////////////////////////////////CAR TRIP PROGRAM END//////////////////////////////////////////////
