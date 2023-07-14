const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
//const sortNumsA = () => {};
const swap = (arr, i1, i2) => {
  const temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
};

const sortNumsA = () => {
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < someNums.length; i++) {
      if (someNums[i] > someNums[i + 1]) {
        swap(someNums, i, i + 1);
        isSwapped = true;
      }
    }
  }

  return someNums;
};

// sort numbers in descending order
const sortNumsD = () => {
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < someNums.length; i++) {
      if (someNums[i] < someNums[i + 1]) {
        swap(someNums, i, i + 1);
        isSwapped = true;
      }
    }
  }

  return someNums;
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < someWords.length; i++) {
      if (someWords[i] > someWords[i + 1]) {
        swap(someWords, i, i + 1);
        isSwapped = true;
      }
    }
  }

  return someWords;
};

// sort words in descending order case insensitive
const sortWordsD = () => {

    let isSwapped = true;
    while (isSwapped) {
      isSwapped = false;
      for (let i = 0; i < someWords.length - 1; i++) {
        if (someWords[i].toLowerCase() < someWords[i + 1].toLowerCase()) {
          swap(someWords, i, i + 1);
          isSwapped = true;
        }
      }
    }
  
    return someWords;
  };

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (
        someProducts[i].name.toLowerCase() >
        someProducts[i + 1].name.toLowerCase()
      ) {
        swap(someProducts, i, i + 1);
        isSwapped = true;
      }
    }
  }

  return someProducts;
};

// sort products by price, ascending order
const sortProductPriceA = () => { 
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (someProducts[i].price > someProducts[i + 1].price) {
        swap(someProducts, i, i + 1);
        isSwapped = true;
      }
    }
  }

  return someProducts;
};

// sort products by price, descending order
const sortProductPriceD = () => { 
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (someProducts[i].price < someProducts[i + 1].price) {
        swap(someProducts, i, i + 1);
        isSwapped = true;
      }
    }
  }

  return someProducts;
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => { 
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < someProducts.length - 1; i++) {
      if (someProducts[i].price > someProducts[i + 1].price) {
        swap(someProducts, i, i + 1);
        isSwapped = true;
      }
    }
  }

  return someProducts;
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < catArt.length - 1; i++) {
      if (catArt[i].designedBy > catArt[i + 1].designedBy) {
        swap(catArt, i, i + 1);
        isSwapped = true;
      }
    }
  }

  return catArt;
};

// sort catArt by price
//const catArtSortByPriceA = () => {  
  const convertPrice = (price) => {
    let newPrice = Number(price);
    if (isNaN(newPrice)) {
      newPrice = Number(price.substr(2) * 10);
    }
    return newPrice;
  };
  
  const catArtSortByPriceA = () => {
    let isSwapped = true;
    while (isSwapped) {
      isSwapped = false;
      for (let i = 0; i < catArt.length - 1; i++) {
        if (convertPrice(catArt[i].price) > convertPrice(catArt[i + 1].price)) {
          swap(catArt, i, i + 1);
          isSwapped = true;
        }
      }
    }
  
    return catArt;
  };

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
  let isSwapped = true;
  while (isSwapped) {
    isSwapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        isSwapped = true;
      }
    }
  }

  return arr;
};

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
