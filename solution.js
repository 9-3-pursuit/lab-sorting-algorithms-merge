const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = () => { someNums.sort((a, b) => a - b);
  return someNums;
};

// sort numbers in descending order
const sortNumsD = () => {someNums.sort((a, b) => b - a);
  return someNums;
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  return someWords.sort();
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  return someWords.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  return someProducts.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
};

// sort products by price, ascending order
const sortProductPriceA = () => {
  return someProducts.sort((a, b) => a.price - b.price);
};

// sort products by price, descending order
const sortProductPriceD = () => {
  return someProducts.sort((a, b) => b.price - a.price);
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  return someProducts.sort((a, b) => {
    if (a.price === b.price) {
      return a.name.localeCompare(b.name);
    }
    return a.price - b.price;
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  return catArt.sort((a, b) => a.designedBy.localeCompare(b.designedBy));
};

// sort catArt by price
const catArtSortByPriceA = () => {
  return catArt.sort((a, b) => {
    const priceA = convertToNumeric(a.price);
    const priceB = convertToNumeric(b.price);
    return priceA - priceB;
  });
};

const convertToNumeric = (price) => {
  if (typeof price === 'number') {
    return price;
  } else if (typeof price === 'string') {
    const numericPrice = price.replace(/♇/g, '') * 10; // Multiply by 10 to convert Pluto Pluto Coin to USD
    return parseFloat(numericPrice);
  }
};


// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr, order = 'asc') => {
  const sortedArray = [...arr];

  const length = sortedArray.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (compare(sortedArray[j], sortedArray[j + 1], order) > 0) {
        [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
      }
    }
  }

  return sortedArray;
};

const compare = (a, b, order) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return order === 'asc' ? a - b : b - a;
  } else if (typeof a === 'string' && typeof b === 'string') {
    if (order === 'asc') {
      return a.localeCompare(b, undefined, { sensitivity: 'case' });
    } else if (order === 'desc') {
      return b.localeCompare(a, undefined, { sensitivity: 'case' });
    }
  } else {
    throw new Error('Invalid types for comparison');
  }
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
