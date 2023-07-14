const { catArt, someNums, someProducts, someWords } = require("./data/data.js");


// sort numbers in ascending order
const sortNumsA = (nums) => {
  for (let i=0; i < nums.length; i++){
    for(let j=0; j <nums.length; j++){
      if(nums[j]>nums[j+1]){
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp
      }
    }
  }
  return nums;
};

// sort numbers in descending order
const sortNumsD = (nums) => {
  for (let i=0; i < nums.length; i++){
    for(let j=0; j <nums.length; j++){
      if(nums[j]<nums[j+1]){
        let temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp
      }
    }
  }
  return nums;

};


// sort words in ascending order case sensitive
const sortWordsA = (words) => {
  for (let i=0; i < words.length; i++){
    for(let j=0; j <words.length; j++){
      if(words[j]>words[j+1]){
        let temp = words[j];
        words[j] = words[j+1];
        words[j+1] = temp
      }
    }
  }
  return words;
};


// sort words in descending order case insensitive
const sortWordsD = (words) => {
  for (let i=0; i < words.length-1; i++){
    for(let j=0; j <words.length-1; j++){
      if(words[j].localeCompare(words[j+1])<0){
        let temp = words[j];
        words[j] = words[j+1];
        words[j+1] = temp
      }
    }
  }
  return words;
};


// sort products by name, ascending order case insensitive
const sortProductNamesA = (someProducts) => {
  for (let i=0; i < someProducts.length-1; i++){
    for(let j=0; j <someProducts.length-1; j++){ 
      if(someProducts[j].name.localeCompare(someProducts[j+1].name) > 0){
        let temp = someProducts[j];
        someProducts[j] = someProducts[j+1];
        someProducts[j+1] = temp
      }
    }
  }
  return someProducts;
};


// sort products by price, ascending order
const sortProductPriceA = (someProducts) => {
  for (let i=0; i < someProducts.length-1; i++){
    for(let j=0; j <someProducts.length-1; j++){
      if(someProducts[j].price > someProducts[j+1].price){
        let temp = someProducts[j];
        someProducts[j] = someProducts[j+1];
        someProducts[j+1] = temp
      }
    }
  }
  return someProducts;
};



// sort products by price, descending order
const sortProductPriceD = (someProducts) => {
  for (let i=0; i < someProducts.length-1; i++){
    for(let j=0; j <someProducts.length-1; j++){
      if(someProducts[j].price < someProducts[j+1].price){
        let temp = someProducts[j];
        someProducts[j] = someProducts[j+1];
        someProducts[j+1] = temp
      }
    }
  }
  return someProducts;
};



// sort products by price, then by name, ascending order
const sortProducsPriceNameA = (someProducts) => {
  for (let i=0; i < someProducts.length-1; i++){
    for(let j=0; j <someProducts.length-1; j++){
      if(someProducts[j].price > someProducts[j+1].price){
          let temp = someProducts[j];
          someProducts[j] = someProducts[j+1];
          someProducts[j+1] = temp;
      }
  }
}
  return someProducts;
};



// sort catArt by designed by
const catArtSortDesginedByA = (catArt) => {
  if (catArt.length <= 1) {
    return catArt;
  }

  const pivot = catArt[catArt.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < catArt.length; i++) {
    if (catArt[i].designedBy < pivot.designedBy) { //someProducts[j].name.localeCompare(someProducts[j+1].name) > 0
      left.push(catArt[i]);
    } else {
      right.push(catArt[i]);
    }
  }
  
  return [...catArtSortDesginedByA(left), pivot, ...catArtSortDesginedByA(right)];


};

 console.log(catArtSortDesginedByA(catArt))

// sort catArt by price
const catArtSortByPriceA = () => {
  
};

// Create your own sort function
// it should sort in ascending order
// it should work for numbers or words (case sensitive)
// create your own sort algorithm
// or try to implement bubble sort
// or try to implement merge sort
// or look up another common sort algorithm (i.e. quicksort, ) and try your own implementation
// Bonus add another argument that would allow the function to be used for ascending or descending order

//
const mySortFunction = (arr) => { 
const merge = (left, right) => {
  let leftIndex = 0;
  let rightIndex =  0;
  let sorted = [];
 
  while(leftIndex < left.length && rightIndex < right.length){
   
      if(left[leftIndex] < right[rightIndex]){
        sorted.push(left[leftIndex])
        leftIndex++
      }else{
        sorted.push(right[rightIndex])
        rightIndex++
    } 
  }
  return [...sorted, ...left.slice(leftIndex), ...right.slice(rightIndex)];
 }
 

   if(arr.length <=1){
     return arr;
   }
   
    let middleIndex = Math.floor(arr.length/2);
    let left = arr.slice(0, middleIndex);
    let right = arr.slice(middleIndex);
      
       return merge(
         mySortFunction(left),
         mySortFunction(right),
       )
 
};

console.log(mySortFunction([4,2,5,3,1,6,77]))


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
