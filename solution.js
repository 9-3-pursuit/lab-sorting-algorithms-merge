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
const sortProductNamesA = () => {};

// sort products by price, ascending order
const sortProductPriceA = () => {};

// sort products by price, descending order
const sortProductPriceD = () => {};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  return catArt.sort((a, b) => a.designedBy.localeCompare(b.designedBy));
};

// sort catArt by price
const catArtSortByPriceA = () => {
  return catArt.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
};

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
