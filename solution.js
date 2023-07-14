const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  if (someNums.sort((a, b) => a - b)) return someNums;
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  if (someNums.sort((a, b) => b - a)) return someNums;
};
// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort();
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  return someWords.sort((a, b) => {
    const wordA = a.toLowerCase();
    const wordB = b.toLowerCase();
    if (wordA < wordB) return 1;
    if (wordA > wordB) return -1;
    return 0;
  });
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someProducts.sort((a, b) => {
    const productsA = a.name.toLowerCase();
    const productsB = b.name.toLowerCase();
    if (productsA > productsB) return 1;
    if (productsA < productsB) return -1;
    return 0;
  });
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
    const productsA = a.price;
    const productsB = b.price;
    const productsNameA = a.name;
    const productsNameB = b.name;
    if (productsA !== productsB) {
      return productsA - productsB;
    } else {
      if (productsNameA < productsNameB) return -1;
      if (productsNameA > productsNameB) return 1;
      return 0;
    }
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  return catArt.sort((a, b) => {
    const artA = a.designedBy;
    const artB = b.designedBy;
    if (artA > artB) return 1;
    if (artA < artB) return -1;
    return 0;
  });
};

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
const mySortFunction = (arr, order = "asc") => {
  const nums = arr.length;
  for (let i = 0; i < nums - 1; i++) {
    for (let j = 0; j < nums - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temporary = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temporary;
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
