const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  if(someNums.sort((a, b) => a - b))
    return someNums;
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  if(someNums.sort((a, b) => b - a))
    return someNums;
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
    return someWords.sort();
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  return someWords.sort((a, b) => {
    let currWord = a.toLowerCase();
    let nextWord = b.toLowerCase();

    if (currWord < nextWord) return 1;
    if (currWord > nextWord) return -1;
    return 0;
  });
};


// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  return someProducts.sort((a, b) => {
    const currProd = a.name.toLowerCase();
    const nextProd = b.name.toLowerCase();

    // If the names are equal, sort them based on original case-sensitive order
    if (currProd < nextProd) return -1;
    if (currProd > nextProd) return 1;
    return 0;
  });
};

// sort products by price, ascending order
const sortProductPriceA = () => {
  return someProducts.sort((a, b) => {
    const currProd = a.price;
    const nextProd = b.price;
    if (currProd > nextProd) return 1;
    if (currProd < nextProd) return - 1;

    return 0;
  })
};

// sort products by price, descending order
const sortProductPriceD = () => {
    return someProducts.sort((a, b) => b.price - a.price);
  };


// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {
  return someProducts.sort((a, b) => {
    if (a.price !== b.price) {
      return a.price - b.price; // Sort by price in ascending order
    } else {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (nameA < nameB) return -1; // Sort by name in ascending order
      if (nameA > nameB) return 1;
      return 0;
    }
  });
};

// sort catArt by designed by
const catArtSortDesginedByA = () => {
  return catArt.sort((a, b) => {
    const designedByA = a.designedBy;
    const designedByB = b.designedBy;
    if (designedByA > designedByB) return 1;
    if (designedByA < designedByB) return - 1;
    return 0;
  })
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  const convertCryptoToDollars = (price) => {
    if (typeof price === 'string') {
      if (price.includes('♇♇')) {
        const cryptoValue = Number(price.replace('♇♇', ''));
        return cryptoValue * 10;
      }
      return Number(price);
    }
    return price;
  };

  return catArt.sort((a, b) => {
    const priceA = convertCryptoToDollars(a.price);
    const priceB = convertCryptoToDollars(b.price);
    return priceA - priceB;
  });
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
  // Check if the input is an array
  if (!Array.isArray(arr)) {
    throw new Error('Input is not an array');
  }

  // Clone/Create a copy of the array using the spread operator to avoid modifying the original array
  const sortedArray = [...arr];

  // Perform bubble sort
  const length = sortedArray.length;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      // Compare next/adjacent elements and swap if necessary
      if (sortedArray[j] > sortedArray[j + 1]) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
};

// Examples/EdgeCases:
const numbers = [7, 3, 9, 2, 5];
console.log(mySortFunction(numbers)); // Output: [2, 3, 5, 7, 9]

const words = ['apple', 'cat', 'banana', 'dog'];
console.log(mySortFunction(words)); // Output: ['apple', 'banana', 'cat', 'dog']


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
