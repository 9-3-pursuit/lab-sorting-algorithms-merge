const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (nums) => {
  nums.sort((a, b) => a - b );

  return nums
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  nums.sort((a, b) => b - a);
  return nums
};

// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  words.sort((a, b)=> {
    if(a < b){
      return -1;

    }
    else if (a > b){
      return 1;
    }
    else{
      return 0
    }
  })
  return words;
}

// sort words in descending order case insensitive
const sortWordsD = (words) => {
  words.sort((a, b)=> {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if(a< b){
      return 1
    }else if( a > b){
      return -1
    } else {
      return 0;
    }
  })
  return words;
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (products) => {
   products.sort((a, b) => {
    a.name = a.name.toLowerCase();
    b.name = b.name.toLowerCase();
    if (a.name > b.name){
      return 1;
    }
    else if (a.name < b.name){
      return -1;
    }
    return 0
   })
   return products;
};

// sort products by price, ascending order
const sortProductPriceA = (products) => {
  products.sort((a, b)=> {
    if(a.price >b.price){
      return 1;
    }else if(a.price < b.price){
    return -1;
  }return 0;
  })
  return products;
};

// sort products by price, descending order
const sortProductPriceD = (products) => {
  products.sort((a, b)=> {
    if(a.price > b.price){
      return -1
    }else if (a.price < b.price){
      return 1
    }
    return 0
  })
  return products;
};

// sort products by price, then by name, ascending order
const sortProductPriceNameA = (products) => {

  products.sort((a, b)=> {
  if(a.price - b.price > 0){
    return 1;
  }
  else if (a.price - b.price < 0){
    return -1
  }
  else if (a.name <b.name){
    return -1 ;

  }
  else if (a.name > b.name){
    return 1
  }
  return 0;
})
return products;

};

// sort catArt by designed by
const catArtSortDesignedByA = () => {};

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
  sortProductPriceNameA,
  catArtSortDesignedByA,
  catArtSortByPriceA,
  mySortFunction,
};
