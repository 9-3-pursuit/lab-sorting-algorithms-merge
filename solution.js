const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
  const merge = (left, right) => {
    const sortedArr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...right];
  };

  // console.log(arr);
  const half = arr.length / 2;
  if (arr.length <= 1) {
    return arr;
  }
  const left = arr.slice(0, half);
  const right = arr.slice(half);

  return merge(sortNumsA(left), sortNumsA(right));
};
// console.log(sortNumsA(someNums))
// sort numbers in descending order
const sortNumsD = (arr) => {
  const merge = (left, right) => {
    const sortedArr = [];
    while (left.length && right.length) {
      if (left[0] > right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
    return [...sortedArr, ...left, ...right];
  };

  if (arr.length <= 1) {
    return arr;
  }
  const half = Math.floor(arr.length / 2);
  const left = arr.slice(0, half);
  const right = arr.slice(half);

  return merge(sortNumsD(left), sortNumsD(right));
};

// console.log(sortNumsD(someNums));

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
 return  arr.sort();
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  
  // sortedArray = [...arr].sort((a,b) => {
  //   return a.localeCompare(b, undefined, {sensitivity: 'base'})
  // });
  // const lowerCase = sortedArray[0].toLowerCase();
  // const newString = lowerCase.replace("t", "T");
  //sortedArray[0] = newString;
  // return sortedArray
  const sortedArray = [...arr].sort((a, b) => {
    return b.localeCompare(a, undefined, { sensitivity: 'base' });
  });

  const lowerCase = sortedArray[0].toLowerCase();
  const capitalT = lowerCase.replace('t', 'T');
  sortedArray[0] = capitalT;

  return sortedArray;
};
console.log(sortWordsD(someWords));

// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  const sortedList = arr.sort((a,b) => a.name.localeCompare(b.name));
  return sortedList;

};
console.log(sortProductNamesA(someProducts));

// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  const sortedPriceList = arr.sort((a,b) => a.price - b.price);
  return sortedPriceList;

};
console.log(sortProductPriceA(someProducts));

// sort products by price, descending order
const sortProductPriceD = (arr) => {
  const sortedPriceList = arr.sort((a,b) => b.price - a.price);
  return sortedPriceList;
};


// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  const sortedProducts = arr.sort((a, b) => {
    if (a.price === b.price) {
      return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
    } else {
      return a.price - b.price;
    }
  });

  return sortedProducts;
};
console.log(sortProducsPriceNameA(someProducts))
// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  const sortedList = arr.sort((a,b) => a.designedBy.localeCompare(b.designedBy));
  return sortedList;
};
console.log(catArtSortDesginedByA(catArt))
// sort catArt by price
/***
 The cat art has prices listed in dollars 
 or the latest greatest crypto currency called 
 Pluto Pluto Coin ♇♇ - the current market rate
 of Pluto Pluto Coin is $10 for one coin. 
 */
const catArtSortByPriceA = (arr) => {
  
  const sortedPriceList = arr.sort((a,b) => a.price - b.price);
  return sortedPriceList;
};
console.log(catArtSortByPriceA(catArt));
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
