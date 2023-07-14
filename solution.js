const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  if (someNums.length <= 1) {
    return someNums;
  }

  const half = Math.floor(someNums.length / 2);
  const left = someNums.slice(0, half); // making a new arr w/ the first half of our original array
  const right = someNums.slice(half); // the rest of our arr

  return mergeAscending(sortNumsA(left), sortNumsA(right));
};

function mergeAscending(left, right) {
  const sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

// sort numbers in descending order
const sortNumsD = (someNums) => {
  if (someNums.length <= 1) {
    return someNums;
  }
  const half = Math.floor(someNums.length / 2);
  const left = someNums.slice(0, half); // making a new arr w/ the first half of our original array
  const right = someNums.slice(half); // the rest of our arr
  return mergeDescending(sortNumsD(right), sortNumsD(left));
};

function mergeDescending(right, left) {
  const sortedArray = [];
  while (left.length && right.length) {
    if (right[0] > left[0]) {
      sortedArray.push(right.shift());
    } else {
      sortedArray.push(left.shift());
    }
  }
  return [...sortedArray, ...right, ...left];
}
// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  if (someWords.length <= 1) {
    return someWords;
  }
  const half = Math.floor(someWords.length / 2);
  const left = someWords.slice(0, half);
  const right = someWords.slice(half);

  return mergeWordsAscending(sortWordsA(left), sortWordsA(right));
};

function mergeWordsAscending(left, right) {
  const sortedArray = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  if (someWords.length <= 1) {
    return someWords;
  }

  const half = Math.floor(someWords.length / 2);
  const left = someWords.slice(0, half);
  const right = someWords.slice(half);

  return mergeWordsDescending(sortWordsD(right), sortWordsD(left));
};

function mergeWordsDescending(right, left) {
  const sortedArray = [];
  while (left.length && right.length) {
    if (right[0].toLowerCase() > left[0].toLowerCase()) {
      sortedArray.push(right.shift());
    } else {
      sortedArray.push(left.shift());
    }
  }
  return [...sortedArray, ...right, ...left];
}

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  if (someProducts.length <= 1) {
    return someProducts;
  }
  const half = Math.floor(someProducts.length / 2);
  const left = someProducts.slice(0, half);
  const right = someProducts.slice(half);
  return WordsAscending(sortProductNamesA(left), sortProductNamesA(right));
};

function WordsAscending(left, right) {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0].name < right[0].name) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  if (someProducts.length <= 1) {
    return someProducts;
  }
  const half = Math.floor(someProducts.length / 2);
  const left = someProducts.slice(0, half);
  const right = someProducts.slice(half);

  return priceAscending(sortProductPriceA(left), sortProductPriceA(right));
};

function priceAscending(left, right) {
  const sortedArray = [];

  while (left.length && right.length) {
    if (left[0].price < right[0].price) {
     sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }
  return [...sortedArray, ...left, ...right];
}
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
