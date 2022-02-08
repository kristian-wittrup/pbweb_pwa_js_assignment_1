
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

// filter fat arrow
const canDrink = ages.filter(age => age >= 21);
const ageBetween = ages.filter(age => age >= 21 && age <= 39);
const olderThen = famousPeople.filter ( fPerson => (fPerson.end - fPerson.active >= 80));


const betweenOrEqualto45 = famousPeople.filter (age45 => (age45.end - age45.active) <= 45);
let getoccu = famousPeople.filter (occu => occu.occupation === "Dancer");
let getoccu2 = famousPeople.filter (occu => occu.occupation === "Actor" && occu.occupation === "Singer");

// sort MDN  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// bruger chaining-method her. Så efter sort() har kørt, sætter jeg .reverse() på 
randoSort = famousPeople.sort(
  function(a, b){
    ;debugger
    return a.active - b.active
    
  }).reverse();
 
console.log(randoSort)  
// Samme princip her. Sort() der chaines med .reverse(). Dette er er ternary metode at skrive det på:
randoSortArrow = famousPeople.sort((a, b) => (a.active - b.active) ? 1 : ((b.active - a.active) ? -1 : 0)).reverse();

//console.log(randoSortArrow)

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



// Map

// halves
const ageMap = ages
  .map(age => age / 2)

//console.log("test map", ageMap)  

// sqrt divisible with 5 (modulus)
const ageMap2 = ages
  .map(age => age % 5)
  .map(age => Math.sqrt(age))


const mapOnOccupation = famousPeople.map(fp => fp.occupation);



// Example maps
// Create array of famousPeople names
const famousPeopleNames = famousPeople.map(function(fp) {
  return fp.name;
});

const testMap = famousPeople.map(function(fp) {
  return `${fp.name} [${fp.active} - ${fp.end}]`;

});

//console.log("testmap", testMap)

const testMapFatArrow = famousPeople
  .map(fp => `${fp.name} [${fp.active} - ${fp.end}]`);



// reduce
// without function arrow
const ageSumReduce = ages.reduce(function(total, age) {
  return total + age;
 
}, 10);

//console.log("agesumReduce", ageSumReduce)

const ageSumReduceArrow = ages.reduce((total, age) => total + age, 0);


// reduce
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
//                            if a smaller then b... then return a, else return b
let smallAgeReduceArrow = ages.reduce((a, b) => a < b ? a : b)


// Combine Methods

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 42)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0)
 

console.log(combined);
 
 

 
