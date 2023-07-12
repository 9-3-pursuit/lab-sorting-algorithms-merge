const { catArt, someNums, someProducts, someWords } = require("./data/data.js");


// sort numbers in ascending order
const sortNumsA = (nums) => {
  for (let i=0; i < nums.length; i++){
    for(let j=0; j <nums.length; j++){
      if(nums[j]>nums[j+1]){
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp
      }
    }
  }
  return nums;
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  for (let i=0; i < nums.length; i++){
    for(let j=0; j <nums.length; j++){
      if(nums[j]<nums[j+1]){
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp
      }
    }
  }
  return nums;

};


// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  for (let i=0; i < words.length; i++){
    for(let j=0; j <words.length; j++){
      if(words[j]>words[j+1]){
        let temp = words[j];
        words[j] = words[j+1];
        words[j+1] = temp
      }
    }
  }
  return words;
};


// sort words in descending order case insensitive
const sortWordsD = (words) => {
  for (let i=0; i < words.length-1; i++){
    for(let j=0; j <words.length-1; j++){
      if(words[j].localeCompare(words[j+1])<0){
        let temp = words[j];
        words[j] = words[j+1];
        words[j+1] = temp
      }
    }
  }
  return words;
};


// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {

};

console.log(sortWordsD(someWords))



// sort products by price, ascending order
const sortProductPriceA = () => {};

// sort products by price, descending order
const sortProductPriceD = () => {};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {};

// sort catArt by designed by
const catArtSortDesginedByA = () => {};

// sort catArt by price
const catArtSortByPriceA = () => {};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = () => {};

module.exports = {
  sortNumsA,
  sortNumsD,
  sortWordsA,
  sortWordsD,
  sortProductNamesA,
  sortProductPriceA,
  sortProductPriceD,
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
