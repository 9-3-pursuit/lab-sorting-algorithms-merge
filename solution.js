const {
  catArt,
  someNums,
  someNums2,
  someProducts,
  someWords,
} = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  return someNums.sort((a, b) => a - b);
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  return someNums.sort((a, b) => b - a);
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return someWords.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? -1 : 1));
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someProducts.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  return someProducts.sort((a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  });
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  return someProducts.sort((a, b) => (a.price > b.price ? -1 : 1));
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  return someProducts.sort((a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
};

// sort catArt by designed by. ascending order
const catArtSortDesginedByA = (catArt) => {
  // return catArt.sort((a, b) => (a.designedBy.toUpperCase() > b.designedBy.toUpperCase() ? -1 : 1));
  return catArt.sort((a, b) => {
    if (a.designedBy < b.designedBy) return -1;
    if (a.designedBy > b.designedBy) return 1;
    return 0;
  });
};

// sort catArt by price
const catArtSortByPriceA = (priceArt) => {
  // P - sort the carArt arr by prices
  // E - not all cases have standard number values for price
  // D - array
  // A -
  // iterate through array - loop or while loop - nested looping
  // you sort by price based on price value - checking if the price is a Number vale or not
  // return order as it corresponds to which price is more than the prev. price
  // C-

  let sorted = true;
  // while loop used to help with swapping as the prices are looped through possibly
  while (sorted) {
    sorted = false;
    for (let i = 0; i < priceArt.length - 1; i++) {
      //iterates over the array - 1st iteration
      // set current & prevevious price conditons
      let price1 = Number(priceArt[i].price);
      let price2 = Number(priceArt[i + 1].price);

      // checking if it's a number or not while checking for current price & next price in the list
      if (isNaN(price1)) {
        price1 = Number(10 * priceArt[i].price.slice(-1));
      }
      if (isNaN(price2)) {
        price2 = Number(10 * priceArt[i + 1].price.slice(-1));
      }

      // this would swap prices into the correct order based off of if the condition is true
      if (price1 > price2) {
        sorted = true;
        let temp = priceArt[i + 1];
        priceArt[i + 1] = priceArt[i];
        priceArt[i] = temp;
      }
    }
  }
  return priceArt;
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order

const mySortFunction = () => {
  const merge = (someNums, someNums2) => {
    const sortedNumsArray = [];
    while (someNums.length && someNums2.length) {
      if (someNums[0] < someNums2[0]) {
        sortedNumsArray.push(someNums.shift());
      } else {
        sortedNumsArray.push(someNums2.shift());
      }
    }
    return [...sortedNumsArray, ...someNums, ...someNums2];
  };
  console.log("merge func:", merge(someNums, someNums2)); 
  // [ 1, 2, 3,  4, 5, 6, 7, 8, 9, 0, 10, 9, 8, 7, 6, 5, 4,  3, 2, 1, 0]
  
  const mergeSort = (numsArr) => {
    const half = numsArr.length / 2
    if(numsArr.length <= 1){
      return numsArr;
    }
    const someNums = numsArr.splice(0,half)
    const someNums2 = numsArr
    console.log("someNums:",someNums, "someNums2:", someNums2) 
    return merge(mergeSort(someNums), mergeSort(someNums2))
    
  }
  console.log(mergeSort(someNums,mergeSortsomeNums2))
  
  const numsArr2 = [5, 4, 3 , 2, 1]
  console.log(mergeSort(numsArr2)) //  [ 1, 2, 3, 4, 5 ]
  
  
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
  mySortFunction
 
};
