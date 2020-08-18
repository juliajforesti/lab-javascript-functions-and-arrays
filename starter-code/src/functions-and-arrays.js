// Iteration #1: Find the maximum

function maxOfTwoNumbers(par1, par2) {
  return par1 > par2 ? par1 : par2;
}

// Iteration #2: Find longest word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

function findLongestWord(arrOfWords) {
  if (arrOfWords.length === 0) return null;
  return arrOfWords.sort((a, b) => b.length - a.length)[0];
}

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrOfNum) {
  return arrOfNum.reduce((acc, cv) => acc + cv, 0);
}

function sum(arr) {
  return arr
    .map((item) => {
      if (typeof item === "string") return item.length;
      if (typeof item === "boolean") return item ? 1 : 0;
      if (typeof item === "object" || typeof item === "array")
        throw new Error("Unsupported data type sir or ma'am");
      else return item;
    })
    .reduce((acc, cv) => acc + cv, 0);
}

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  if (arr.length === 0) return null;
  return sum(arr) / arr.length;
}

// Level 2: Array of strings
const wordsArr = [
  "seat",
  "correspond",
  "linen",
  "motif",
  "hole",
  "smell",
  "smart",
  "chaos",
  "fuel",
  "palace",
];

function averageWordLength(arr) {
  if (arr.length === 0) return null;
  return sum(arr) / arr.length;
}

function avg(arr) {
  if (arr.length === 0) return null;
  return Number((sum(arr) / arr.length).toFixed(2));
}

// Iteration #5: Unique arrays
const wordsUnique = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring",
];

function uniquifyArray(arr) {
  if (arr.length === 0) return null;
  return [...new Set(arr)];
}

// Iteration #6: Find elements
const wordsFind = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, word) {
  if (arr.length === 0) return null;
  return arr.includes(word);
}

// Iteration #7: Count repetition
const wordsCount = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter",
];
function howManyTimes(arr, word) {
  return arr.filter((item) => item === word).length;
}
// Iteration #8: Bonus

function greatestProduct (matrix) {
  let max = 0;
  //1. iterate the rows;
      for (i=0; i<matrix.length; i++){ 
          //2. iterate the columns; 
          for (j=0; j<matrix.length; j++){ 
              //3. check the maximum product in horizontal row;
              if ((j - 3) >= 0){ 
                  result = (matrix[i][j] * matrix[i][j - 1] * matrix[i][j - 2] * matrix[i][j - 3]) //      
                  if (max < result){
                      max = result }
              }
              //4. check the maximum product in vertical row;
              if ((i - 3) >= 0){ 
                  result = (matrix[i][j] * matrix[i-1][j] * matrix[i-2][j] * matrix[i - 3][j]) //      
                  if (max < result){
                      max = result }
              }
          }   return max
      }
  }