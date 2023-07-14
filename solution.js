const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const mergeAcending = (left,right) => { 
  const sortedArray = []
  while(left.length && right.length){ 
    if(left[0] < right[0]){
      sortedArray.push(left.shift())
    }else {
      sortedArray.push(right.shift())
    }
  }
  return [...sortedArray, ...left, ...right] 
} 
const mergeDecending = (left,right) => { 
  const sortedArray = []
  while(left.length && right.length){ 
    if(left[0] > right[0]){
      sortedArray.push(left.shift())
    }else {
      sortedArray.push(right.shift())
    }
  }
  return [...sortedArray, ...left, ...right] 
} 

const mergeSort = (arr, type) => {
  const middle = Math.floor(arr.length/2);
  if(arr.length <= 1){
    return arr;
  }
  const left = arr.slice(0,middle); 
  const right = arr.slice(middle);
  if (type === "acending") {
    return mergeAcending(mergeSort(left, "acending"), mergeSort(right, "acending"))
  } else if (type === "decending") {
    return mergeDecending(mergeSort(left, "decending"), mergeSort(right, "decending"))
  }
}

const sortNumsA = (someNums) => {
  return mergeSort(someNums, "acending");
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  return mergeSort(someNums, "decending");
};

// sort words in ascending order case sensitive
const sortWordsA = () => {};

// sort words in descending order case insensitive
const sortWordsD = () => {};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {};

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
