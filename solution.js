const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {

 return someNums.sort(function compare(a, b) {
  return  a-b
})
  
}

function compare(a, b) {
  return  a-b
}



// sort numbers in descending order
const sortNumsD = (someNums) => {
  return someNums.sort(function compare (a,b){
    return b-a;
  })
};

// sort words in ascending order case sensitive
const sortWordsA = () => {
  return someWords.sort()
};

// sort words in descending order case insensitive
const sortWordsD = () => {
  // someWords.sort();
  let res = []
  let subArr =  someWords.sort().reverse().pop()
  res.push(subArr, ...someWords)
  return res;
}

// sort products by name, ascending order case insensitive
const sortProductNamesA = () => {
  
  someProducts.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });

  const sortedNames = someProducts.map((product) => product);
  
  return sortedNames;
};



// sort products by price, ascending order
const sortProductPriceA = () => {
  return someProducts.sort((a, b) => {
    return a.price - b.price
  })
};

// sort products by price, descending order
const sortProductPriceD = () => {
  return someProducts.sort((a, b) => {
    return b.price - a.price;
  })
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {};

// sort catArt by designed by
const catArtSortDesginedByA = () => {};

// sort catArt by price
const catArtSortByPriceA = () => {
  return catArt.sort((a, b) => {
    if(typeof a.price === "string") {
      return Number(a.price)
    }if(typeof b.price === "string") {
      return Number(b.price)
    }else {
      return a.price - b.price
    }
  })
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
