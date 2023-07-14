const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (someNums) => {
  // return someNums.sort((a,b) => a-b)
  
  console.log('test:', someNums)

  for (let i = 0; i < someNums.length; i++) {
    for (let j = 0; j < someNums.length; j++) {
      if (someNums[j] > someNums[j + 1]) {
        let temporary = someNums[j]
        someNums[j] = someNums[j + 1]
        someNums[j+1] = temporary
      }
    }
  }
    console.log('test2', someNums) 
    return someNums
  
};

// sort numbers in descending order
const sortNumsD = (someNums) => {

  // return someNums.sort((a,b) => b-a)
  for (let i = 0; i < someNums.length; i++){
    for (let j = 0; j < someNums.length; j++){
      if (someNums[j] < someNums[j + 1]) {
        let temporary = someNums[j]
        someNums[j] = someNums[j + 1]
        someNums[j+1] = temporary
      }
    }
  }
  return someNums
};

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {

  // return someWords.sort()
  for (let i = 0; i < someWords.length; i++){
    for (let j = 0; j < someWords.length -1 -i; j++){
      let wordOne = someWords[j]
      let wordTwo = someWords[j + 1]
      
      if (wordOne > wordTwo) {
        let temporary = someWords[j]
        someWords[j] = someWords[j + 1]
        someWords[j+1] = temporary
      }
    }
   
  }
  

  
  return someWords
};

// sort words in descending order case insensitive


const sortWordsD = (someWords) => {
  // return someWords.sort((a,b) => b.toLowerCase().localeCompare(a.toLowerCase()))
  for (let i = 0; i < someWords.length - 1; i++) {
    for (let j = i + 1; j < someWords.length; j++) {
      let wordOne = someWords[i].toLowerCase();
      let wordTwo = someWords[j].toLowerCase();
      
      if (wordOne < wordTwo) {
        
        let temporary = someWords[i];
        someWords[i] = someWords[j];
        someWords[j] = temporary;
      }
    }
  }
  return someWords;
};



// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  for (let i = 0; i < someProducts.length; i++){
    let swapped = false
    for (let j = 0; j < someProducts.length - 1 - i; j++){
      if (someProducts[j].name > someProducts[j + 1].name) {
        let temporary = someProducts[j]
        someProducts[j] = someProducts[j + 1]
        someProducts[j + 1] = temporary
        swapped = true
      }
    }

    if (!swapped) {
      break
    }
  }
  return someProducts
};

// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {


  for (let i = 0; i < someProducts.length; i++) {
    let swapped = false;

    for (let j = 0; j < someProducts.length - 1 - i; j++) {
      if (someProducts[j].price > someProducts[j + 1].price) {
        let temporary = someProducts[j];
        someProducts[j] = someProducts[j + 1];
        someProducts[j + 1] = temporary;
        swapped = true;
      }
    }

    if (!swapped) {
      break;
    }
  }

  console.log('some:', someProducts);
  return someProducts;
};




// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  for (let i = 0; i < someProducts.length; i++) {
    let swapped = false;
    for (let j = i + 1; j < someProducts.length - i; j++) {
      if (someProducts[j].price > someProducts[j - 1].price) {
        let temporary = someProducts[j];
        someProducts[j] = someProducts[j - 1];
        someProducts[j - 1] = temporary;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  console.log('someProducts:', someProducts);
  return someProducts;
};
  



console.log('test',sortProductPriceD(someProducts))



// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  for (let i = 0; i < someProducts.length; i++) {
    for (let j = 0; j < someProducts.length - i - 1; j++) {
      if (someProducts[j].price > someProducts[j + 1].price ||
          (someProducts[j].price === someProducts[j + 1].price &&
           someProducts[j].name.localeCompare(someProducts[j + 1].name) > 0)) {
        const temp = someProducts[j]
        someProducts[j] = someProducts[j + 1]
        someProducts[j + 1] = temp
      }
    }
  }

  return someProducts
};


// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  for (let i = 0; i < catArt.length; i++){
    let swapped = false
    for (let j = 0; j < catArt.length - 1 - i; j++){
      if (catArt[j].designedBy > catArt[j + 1].designedBy) {
        let temporary = catArt[j]
        catArt[j] = catArt[j + 1]
        catArt[j + 1] = temporary
        swapped = true
      }
    }
    if (!swapped) {
      break
    }
  }
  return catArt
};

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  for (let i = 0; i < catArt.length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < catArt.length - 1 - i; j++) {
      if (catArt[j].price > catArt[j + 1].price) {
        let temporary = catArt[j];
        catArt[j] = catArt[j + 1];
        catArt[j + 1] = temporary;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
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
const mySortFunction = () => {
  
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
