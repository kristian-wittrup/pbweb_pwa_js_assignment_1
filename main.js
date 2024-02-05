const ages = [20, 40, 30, 15, 18, 17, 19, 21, 61, 55, 54, 9, 3, 22, 23];

const famousPeople = [
    {name: "Elvis Presley", category: "Singer", active: 1935, end: 1977},
    {name: "Freddie Mercury", category: "Singer", active: 1946, end: 1991},
    {name: "Preben Elkjær", category: "Sport", active: 1957, end: 2018},
    {name: "Ryan Reynolds", category: "Actor", active: 1976, end: 2018},
    {name: "Sir Patrick Stewart", category: "Actor", active: 1940, end: 2018},
    {name: "Dame Judi Dench", category: "Actor", active: 1934, end: 2018},
    {name: "Fred Astair", category: "Dancer", active: 1899, end: 1987},
    {name: "Ginger Rogers", category: "Dancer", active: 1911, end: 1995},
    {name: "Gill Bates", category: "TechDude", active: 1955, end: 2018},
    {name: "Mlon Eosk", category: "TechDude", active: 1971, end: 2018}
];


 

// filter

// Get 21 and older
// With for loop only
/* 
let canDrink = [];
for(let i = 0; i < ages.length; i++) {
  if(ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}
 */


// filter + function
/* 
let canDrink = ages.filter(function(age) {
  if(age >= 21) {
    return true;
  }
}); 
*/

// filter fat arrow :: First bullet point
const canDrink = ages.filter(age => age > 30);  // filter(age => age =< 50);
const filteredAges2 = ages.filter(age => age >= 20 && age <= 40);
const ageBetween = ages.filter(age => age >= 20 && age <= 40);
const olderThen = famousPeople.filter ( fPerson => (fPerson.end - fPerson.active >= 20));
// console.log("olderThen", olderThen)

// // bonus:
const ageDifferenceGreaterThan40FamousPeople = famousPeople.filter(person => person.end - person.active > 40); // 50, 60, etc

// Destructuring version
// const ageDifferenceGreaterThan40FamousPeople = famousPeople.filter(({ end, active }) => end - active > 40);
// console.log("Age difference > 40 (Famous People):", ageDifferenceGreaterThan40FamousPeople);





// Second bullet point
// chatgpt Active-End Difference <= 45:
// Filter on “active” and “end”, where the difference between “active” and “end” is smaller or equal to 45
const activeEndDifference45 = famousPeople.filter(person => person.end - person.active <= 45);
//console.log("Active-End Difference <= 45:", activeEndDifference45);
const betweenOrEqualto45 = famousPeople.filter (age45 => (age45.end - age45.active) <= 45);
// console.log("betweenOrEqualto45", betweenOrEqualto45)

// Filter on occupation, so you only get shown the ones that are “dancers”
let getoccu = famousPeople.filter (occu => occu.occupation === "Dancer");
// console.log("getoccu", getoccu)

// Filter on occupation, so you only get shown the ones that are “actors” and “singers”
let getoccu2 = famousPeople.filter (occu => occu.occupation === "Actor" && occu.occupation === "Singer");
// console.log("getoccu2", getoccu2)


// sort MDN  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// Using chaining-method here. after sort() has run, i am adding(chaning) .reverse() to it.
let randoSort = famousPeople.sort(
  function(a, b){
   // ;debugger
    return a.active - b.active
  }).reverse();
 //console.log("randoSort", randoSort)  

// this is the same as above, but with fat arrow
const randoSortArrowAll = famousPeople.sort((a, b) => {
  if (a.active > b.active) {
    return 1;
  } else if (b.active > a.active) {
    return -1;
  } else {
    return 0;
  }
}).reverse();
//console.log("randoSortArrowAll", randoSortArrowAll)

 // Same principal here. Sort() chaining with .reverse(). This is a ternary operator.
 let randoSortArrow = famousPeople.sort((a, b) => (a.active - b.active) ? 1 : ((b.active - a.active) ? -1 : 0)).reverse();

 // In the return value -1, 0 and 1 : the comparator function (-1, 0, or 1) determine how the elements should be ordered in the sorted array.
 // If a.active - b.active is greater than 0, it returns 1, indicating that a should be placed after b.
 // If b.active - a.active is greater than 0, it returns -1, indicating that b should be placed before a.
 // If both differences are 0 (i.e., the active properties are equal), it returns 0, indicating that the order should remain unchanged.


//console.log("randoSortArrow", randoSortArrow)

// Sort FamousPeople by active year

const famousPeopleSortActive  = famousPeople.sort(function(fp1, fp2) {
  if(fp1.end > fp2.end) { // > 0	sort fp1 before fp2
    return 1; 
  } else {
    return -1;
  }
});

const sortedfamousPeople = famousPeople.sort((a, b) => (a.active > b.active ? 1 : -1));

//Sort ages
const sortAges = ages.sort((a, b) => a - b);



// Map Bullet

// halves
const ageMap = ages
  .map(age => age / 2)

//console.log("test map", ageMap)  

// sqrt divisible with 5 (modulus)
// The first approach applies the square root operation to all numbers, regardless of divisibility by 5, by chaining two separate .map() calls.
const ageMap2 = ages
  .map(age => age % 5)
  .map(age => Math.sqrt(age))

 // console.log("sqrtModolus", ageMap2)

// The second approach uses a single .map() call with a ternary operator to selectively apply the square root operation only to numbers divisible by 5.
const squareRootDivisibleBy5 = ages.map(age => (age % 5 === 0 ? Math.sqrt(age) : age));
// console.log("Square Root of Numbers Divisible by 5:", squareRootDivisibleBy5);


let result = 10 % 3;
// console.log(result);  // Output: 1 (because 10 divided by 3 is 3 with a remainder of 1)
// Use the modulus operator to check if a number is even or odd
// use case for modulus operator : "currentHour % 24" | "Pagination" | "Game Development: frames of animations or determining position of objects" | "Calendar"


// Extract the category of each famous person into a new array
//console.log("ageMap2 SqrtModolus", ageMap2)
const mapOnOccupation = famousPeople.map(fp => fp.category);

//console.log("mapOnOccupation", mapOnOccupation)


// Example maps
// Create array of famousPeople names (have to do a return with old function)
const famousPeopleNames = famousPeople.map(function(fp) {
  return fp.name;
});

// console.log("famousPeopleNames", famousPeopleNames)

// Create array of famousPeople names with active years. return fp name first and then active years in brackets for visual separation
const testMap = famousPeople.map(function(fp) {
  return `${fp.name} [${fp.active} - ${fp.end}]`;

});
//console.log("testmap", testMap)

// return is implied with fat arrow
const testMapFatArrow = famousPeople
  .map(fp => `${fp.name} [${fp.active} - ${fp.end}]`);

//console.log("testMapFatArrow", testMapFatArrow)




// reduce bullet point
// without function arrow

const ageSumReduce = ages.reduce(function(total, age) {
  return total + age;
 
}, 0);  // change value

// console.log("agesumReduce", ageSumReduce)

const ageSumReduceArrow = ages.reduce((total, age) => total + age, 0);


// total amount of years for all famous people using += operator - += is a shorthand for total = total + age
/* 
let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
*/


let smallAgeReduce = ages.reduce(function (acc, val){
  if (val < acc) {
    acc = val;
  }
  return acc;
})
// if a smaller then b... then return a, else return b
let smallAgeReduceArrow = ages.reduce((a, b) => a < b ? a : b)
// console.log("smallAgeReduceArrow", smallAgeReduceArrow)



// Combine/chaining Methods to get a single value
  const combined = ages
  .map(age => age * 2)  // Multiply each age by 2
  .filter(age => age >= 42)  // Keep only ages greater than or equal to 42
  .reduce((a, b) => a + b, 0);  // Sum all the sorted ages

 console.log("combined", combined);
 

 
