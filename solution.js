const { catArt, someNums, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
  if (arr.length <= 1){
    return arr;
  }
 const half = Math.floor(arr.length / 2);
 const left = sortNumsA(arr.slice(0, half));
 const right = sortNumsA(arr.slice(half));
 return mergeAsc(left,right);

};

const mergeAsc = (left, right) => {
  let sortedArr = [];
  while(left.length && right.length) {
    if (left[0] < right[0]){
      sortedArr.push(left.shift());
    }else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}

// sort numbers in descending order
const sortNumsD = (arr) => {
  if (arr.length <= 1){
    return arr;
  }
 const half = Math.floor(arr.length / 2);
 const left = sortNumsD(arr.slice(0, half));
 const right = sortNumsD(arr.slice(half));
 return mergeDsc(left,right);

};

const mergeDsc = (left, right) => {
  let sortedArr = [];
  while(left.length && right.length) {
    if (left[0] > right[0]){
      sortedArr.push(left.shift());
    }else {
      sortedArr.push(right.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
};

// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  if(arr.length <= 1){
    return arr;
  }
  const half = Math.floor(arr.length / 2);
  const left = sortWordsA(arr.slice(0, half))
  const right = sortWordsA(arr.slice(half));

  return mergeAsc(left, right)
};

const mergeWordAsc = (left, right) => {
  let sortedArr = [];
  while (left.length && right.length){
    if(left[0].toLowerCase() < right[0].toLowerCase()){
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return {...sortedArr, ...left, ...right}
}

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  
  if(arr.length <= 1){
    return arr;
  }
  const half = Math.floor(arr.length / 2);
  const left = sortWordsD(arr.slice(0, half))
  const right = sortWordsD(arr.slice(half));

  return mergeWordsDsc(left, right)
};

const mergeWordsDsc = (left, right) => {
  let sortedArr = [];
  while (left.length && right.length){
    if(left[0].toLowerCase() < right[0].toLowerCase()){
      sortedArr.push(right.shift());
    }else {
      sortedArr.push(left.shift())
    }
  }
  return [...sortedArr, ...left, ...right]
}


// sort products by name, ascending order case insensitive
const sortProductNamesA = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = sortProductNamesA(arr.slice(0, half));
  const right = sortProductNamesA(arr.slice(half));

  return mergeProductNamesAsc(left, right);
};

const mergeProductNamesAsc = (left, right) => {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0].name < right[0].name) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};


// sort products by price, ascending order
const sortProductPriceA = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = sortProductPriceA(arr.slice(0, half));
  const right = sortProductPriceA(arr.slice(half));

  return mergeProductPriceAsc(left, right);
};

const mergeProductPriceAsc = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0].price < right[0].price) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};

// sort products by price, descending order
const sortProductPriceD = () => {};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = () => {};

// sort catArt by designed by
const catArtSortDesginedByA = () => {};

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
  sortProducsPriceNameA,
  catArtSortDesginedByA,
  catArtSortByPriceA,
  mySortFunction,
};
