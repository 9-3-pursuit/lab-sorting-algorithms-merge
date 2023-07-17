const { catArt, arr, someProducts, someWords } = require("./data/data.js");

// sort numbers in ascending order
const sortNumsA = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  
  const half = Math.floor(arr.length / 2);
  const left = sortNumsA(arr.slice(0, half));
  const right = sortNumsA(arr.slice(half));
  return mergeAsc(left, right);
};

const mergeAsc = (left, right) => {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right]
}

// sort numbers in descending order
const sortNumsD = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = sortNumsD(arr.slice(0, half));
  const right = sortNumsD(arr.slice(half));

  return mergeDesc(left, right);
};

const mergeDesc = (left, right) => {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right,];
};


// sort words in ascending order case sensitive
const sortWordsA = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = sortWordsA(arr.slice(0, half));
  const right = sortWordsA(arr.slice(half));

  return mergeAsc(left, right);
};

// sort words in descending order case insensitive
const sortWordsD = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = sortWordsD(arr.slice(0, half));
  const right = sortWordsD(arr.slice(half));

  return mergeWordsDesc(left, right);
};

const mergeWordsDesc = (left, right) => {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0].toLowerCase() < right[0].toLowerCase()) {
      sortedArr.push(right.shift());
    } else {
      sortedArr.push(left.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
};


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
    } else if (left[0].price > right[0].price) {
      sortedArr.push(right.shift());
    } else {
      if (left[0].name < right[0].name) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  }
  return [...sortedArr, ...left, ...right];
};


// sort products by price, descending order
const sortProductPriceD = (arr) => {
   if (arr.length <= 1) {
     return arr;
   }

   const half = Math.floor(arr.length / 2);
   const left = sortProductPriceD(arr.slice(0, half));
   const right = sortProductPriceD(arr.slice(half));

   return mergeProductPriceDesc(left, right);
};

const mergeProductPriceDesc = (left, right) => {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0].price > right[0].price) {
      sortedArr.push(left.shift());
    } else if (left[0].price < right[0].price) {
      sortedArr.push(right.shift());
    } else {
      if (left[0].name < right[0].name) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  }
  return [...sortedArr, ...left, ...right];
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = sortProductPriceA(arr.slice(0, half));
  const right = sortProductPriceA(arr.slice(half));

  return mergeProductPriceAsc(left, right);
};

// sort catArt by designed by
const catArtSortDesginedByA = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = catArtSortDesginedByA(arr.slice(0, half));
  const right = catArtSortDesginedByA(arr.slice(half));

  return mergeArtByDesign(left, right);
};

const mergeArtByDesign = (left, right) => { 
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0].designedBy < right[0].designedBy) { 
      sortedArr.push(left.shift());
    } else if (left[0].designedBy > right[0].designedBy) {
      sortedArr.push(right.shift());
    } else {
      if (left[0].itemName.toLowerCase() < right[0].itemName.toLowerCase()) { 
        sortedArr.push(left.shift());
      } else if (left[0].itemName.toLowerCase() > right[0].itemName.toLowerCase()) {
        sortedArr.push(right.shift());
      } else {
        if (left[0].price < right[0].price) {
          sortedArr.push(left.shift());
        } else {
          sortedArr.push(right.shift());
        }
      }
    }
  }
  return [...sortedArr, ...left, ...right];
}


// Convert price function
const convertPlutoPrice = (input) => {
  if (typeof input === 'number') return input;

  if (input.slice(0, 2) !== '♇♇') return Number(input);
  const num = Number(input.slice(2));
  return num * 10;
}




// sort catArt by price
const catArtSortByPriceA = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const half = Math.floor(arr.length / 2);
  const left = catArtSortByPriceA(arr.slice(0, half));
  const right = catArtSortByPriceA(arr.slice(half));

  return mergeCatArtByPrice(left, right);
};

const mergeCatArtByPrice = (left, right) => {
  const sortedArray = [];
  while (left.length && right.length) {
    if (convertPlutoPrice(left[0].price) < convertPlutoPrice(right[0].price)) {
      sortedArray.push(left.shift());
    } else {
      sortedArray.push(right.shift());
    }
  }

  return [...sortedArray, ...left, ...right];
}

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order
const mySortFunction = (arr) => {
   let temp;
   for (let i = 0; i < arr.length; i++) {
     for (let j = i + 1; j < arr.length; j++) {
       if (arr[i] > arr[j]) {
         temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
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
