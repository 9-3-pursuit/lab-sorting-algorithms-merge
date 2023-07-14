const { catArt, someNums, someProducts, someWords } = require("./data/data.js");


const merge = (left,right,type) => { 
  const sortedArray = []
  while(left.length && right.length){ 
    if (type === "ascending") {
      if(left[0] < right[0]){
        sortedArray.push(left.shift())
      }else {
        sortedArray.push(right.shift())
      }
    } else if (type === "descending") {
      if(left[0] > right[0]){
        sortedArray.push(left.shift())
      }else {
        sortedArray.push(right.shift())
      }
    }
  }
  return [...sortedArray, ...left, ...right] 
} 

const mergeSortN = (arr, type) => {
  const middle = Math.floor(arr.length/2);
  if(arr.length <= 1){
    return arr;
  }
  const left = arr.slice(0,middle); 
  const right = arr.slice(middle);
  if (type === "ascending") {
    return merge(mergeSortN(left, "ascending"), mergeSortN(right, "ascending"), "ascending")
  } else if (type === "descending") {
    return merge(mergeSortN(left, "descending"), mergeSortN(right, "descending"), "descending")
  }
}

const sortNumsA = (someNums) => {
  return mergeSortN(someNums, "ascending");
};

// sort numbers in descending order
const sortNumsD = (someNums) => {
  return mergeSortN(someNums, "descending");
};

const mergeWords = (left, right, type) => {
  const sortedArray = [];
  while(left.length && right.length){
    if (type === "ascending") {
        if (left[0].localeCompare(right[0].toLowerCase()) < 0){
          sortedArray.push(left.shift());
        } else {
          sortedArray.push(right.shift());
        }
      } else if (type === "descending") {
        if (left[0].localeCompare(right[0].toLowerCase()) > 0){
          sortedArray.push(left.shift());
        } else {
          sortedArray.push(right.shift());
        }
    }
  }
  return [...sortedArray, ...left, ...right];
}

const mergeSortW = (arr, type) => {
  const middle = Math.floor(arr.length/2);
  if(arr.length <= 1){
    return arr;
  }
  const left = arr.slice(0,middle); 
  const right = arr.slice(middle);
  if (type === "ascending") {
    return mergeWords(mergeSortW(left, "ascending"), mergeSortW(right, "ascending"), "ascending")
  } else if (type === "descending") {
    return mergeWords(mergeSortW(left, "descending"), mergeSortW(right, "descending"), "descending")
  }
}

// sort words in ascending order case sensitive
const sortWordsA = (someWords) => {
  return mergeSortN(someWords, "ascending", false);
};

// sort words in descending order case insensitive
const sortWordsD = (someWords) => {
  return mergeSortW(someWords, "descending", true);
};

const mergeProductNames = (left, right, type) => {
  const sortedArray = [];
  while(left.length && right.length){
    if (type === "ascending") {
        if (left[0].name.localeCompare(right[0].name.toLowerCase()) < 0){
          sortedArray.push(left.shift());
        } else {
          sortedArray.push(right.shift());
        }
      } else if (type === "descending") {
        if (left[0].name.localeCompare(right[0].name.toLowerCase()) > 0){
          sortedArray.push(left.shift());
        } else {
          sortedArray.push(right.shift());
        }
    }
  }
  return [...sortedArray, ...left, ...right];
}

const mergeSortPN = (arr, type) => {
  const middle = Math.floor(arr.length/2);
  if(arr.length <= 1){
    return arr;
  }
  const left = arr.slice(0,middle); 
  const right = arr.slice(middle);
  if (type === "ascending") {
    return mergeProductNames(mergeSortPN(left, "ascending"), mergeSortPN(right, "ascending"), "ascending")
  } else if (type === "descending") {
    return mergeProductNames(mergeSortPN(left, "descending"), mergeSortPN(right, "descending"), "descending")
  }
}

// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  return mergeSortPN(someProducts, "ascending")
};

const mergeProductPrices = (left, right, type) => {
  const sortedArray = [];
  while(left.length && right.length){
    if (type === "ascending") {
        if (left[0].price < right[0].price){
          sortedArray.push(left.shift());
        } else if (left[0].price === right[0].price) {
          if (left[0].name.localeCompare(right[0].name.toLowerCase()) < 0){
            sortedArray.push(left.shift());
          } else {
            sortedArray.push(right.shift());
          }
        } else {
          sortedArray.push(right.shift());
        }
      } else if (type === "descending") {
        if (left[0].price > right[0].price ){
          sortedArray.push(left.shift());
        } else if (left[0].price === right[0].price) {
          if (left[0].name.localeCompare(right[0].name.toLowerCase()) < 0){
            sortedArray.push(left.shift());
          } else {
            sortedArray.push(right.shift());
          }
        } else {
          sortedArray.push(right.shift());
        }
    }
  }
  return [...sortedArray, ...left, ...right];
}

const mergeSortPP = (arr, type) => {
  const middle = Math.floor(arr.length/2);
  if(arr.length <= 1){
    return arr;
  }
  const left = arr.slice(0,middle); 
  const right = arr.slice(middle);
  if (type === "ascending") {
    return mergeProductPrices(mergeSortPP(left, "ascending"), mergeSortPP(right, "ascending"), "ascending")
  } else if (type === "descending") {
    return mergeProductPrices(mergeSortPP(left, "descending"), mergeSortPP(right, "descending"), "descending")
  }
}


// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  return mergeSortPP(someProducts, "ascending");
};

// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  return mergeSortPP(someProducts, "descending")
};

// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  return mergeSortPP(someProducts, "ascending");
};

const mergeCartD = (left, right) => {
  const sortedArray = [];
  while(left.length && right.length){
        if (left[0].designedBy.localeCompare(right[0].designedBy) < 0){
          sortedArray.push(left.shift());
        } else if (left[0].designedBy.localeCompare(right[0].designedBy) === 0) {
          if (left[0].itemName < right[0].itemName){
            sortedArray.push(left.shift());
          } else if (left[0].itemName === right[0].itemName) {
            if (parseInt(left[0].price) === parseInt(right[0].price)) {
              sortedArray.push(left.shift());
            } else {
              sortedArray.push(right.shift());
            }
          } else {
            sortedArray.push(right.shift());
          }
        } else {
          sortedArray.push(right.shift());
      } 
  }
  return [...sortedArray, ...left, ...right];
}

const mergeSortCD= (arr) => {
  const middle = Math.floor(arr.length/2);
  if(arr.length <= 1){
    return arr;
  }
  const left = arr.slice(0,middle); 
  const right = arr.slice(middle);

    return mergeCartD(mergeSortCD(left), mergeSortCD(right))
}
// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  return mergeSortCD(catArt);
};

const mergeCartPrice = (left, right) => {
  const sortedArray = [];
  let leftP = 0;
  let rightP = 0;
  while(left.length && right.length){
    if(left[0].price[0] === "♇"){
      leftP = parseInt(left[0].price[2]) * 10;
    } else {
      leftP = parseInt(left[0].price)
    }
    if(right[0].price[0] === "♇"){
      rightP = parseInt(right[0].price[2]) * 10;
    } else {
      rightP = parseInt(right[0].price)
    }
    if (leftP < rightP) {
      sortedArray.push(left.shift())
    } else if (leftP === rightP) {
      sortedArray.push(left.shift())
    }
    else {
      sortedArray.push(right.shift())
    }
  }
  return [...sortedArray, ...left, ...right];
}

const mergeSortCP = (arr) => {
  const middle = Math.floor(arr.length/2);
  if(arr.length <= 1){
    return arr;
  }
  const left = arr.slice(0,middle); 
  const right = arr.slice(middle);

  return mergeCartPrice(mergeSortCP(left), mergeSortCP(right))
}

// sort catArt by price
const catArtSortByPriceA = (catArt) => {
  return mergeSortCP(catArt);
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order

const mySortFunction = (someWords) => {
  for (var i = 0; i < someWords.length; i++) {
    for (var j = 0; j < (someWords.length - i - 1); j++) {
        if (someWords[j] > someWords[j + 1]) {
            var temp = someWords[j]
            someWords[j] = someWords[j + 1]
            someWords[j + 1] = temp
        }
    }
}
return someWords;
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
