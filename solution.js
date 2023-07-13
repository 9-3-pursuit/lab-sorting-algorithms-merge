const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  if (someNums.sort((a, b) => a - b))
  return someNums
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  if (someNums.sort((a, b) => b - a))
    return someNums
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return someWords.sort()
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return someWords.sort((a, b) => {
  let WordsA = a.toLowerCase()
  let WordsB= b.toLowerCase()
if (WordsA < WordsB) return 1
if (WordsA > WordsB) return -1 
return 0

    
  })
};

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return someProducts.sort((a, b) => {
    let productsA = a.name.toLowerCase();
    let productsB = b.name.toLowerCase();
  if(productsA > productsB) return 1;
  if(productsA < productsB) return -1;
  return 0

  })
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  return someProducts.sort((a, b) => {
    const ProdsA = a.price;
    const ProdsB = b.price;
    if (ProdsA > ProdsB) return 1;
    if (ProdsA < ProdsB) return - 1;

    return 0;
  })
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  return someProducts.sort((a, b) => {
    const ProdsA = a.price;
    const ProdsB = b.price;
    if (ProdsA < ProdsB) return 1;
    if (ProdsA  > ProdsB) return - 1;

    return 0;
})
};
// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  return someProducts.sort((a, b) => {

  
  let ProdsA = a.price;
  let ProdsB = b.price;
  let productsA = a.name;
  let productsB = b.name;

  if(ProdsA && productsA || ProdsB && productsB);
  if(ProdsA > ProdsB) return 1;
  if(ProdsA < ProdsB) return -1; 
  
  return 0;
  })
};

// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return catArt.sort((a, b) => {
    const CartA = a.designedBy;
    const CartB = b.designedBy;
    if (CartA > CartB) return 1;
    if (CartA < CartB) return - 1;
    return 0;
  })

};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  return catArt.sort((a, b) =>  {
  let CatArtA = a.price;
  let CatArtB = b.price;

  if(CatArtA > CatArtB) return 1;
  if(CatArtA < CatArtB) return -1; 

  
  return 0;
 
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
const mySortFunction = (arr) => { 
  
    let nums = arr.length;
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
  }

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
