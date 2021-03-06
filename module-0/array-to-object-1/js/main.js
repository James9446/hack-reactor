/*
Write a function 'transformFirstAndLast' that takes in an array, and returns an object with:
1) the first element of the array as the object's key, and
2) the last element of the array as that key's value.
Example input:
['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
Function's return value (output):
{
  Queen : 'Beyonce'
}
Do not change the input array. Assume all elements in the input array will be of type 'string'.
Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.
E.g. it should handle input like:
['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey']
Function's return value (output):
{
  Kevin : 'Spacey'
}
Starter Code
function transformFirstAndLast(array) {
  // your code here
}
*/

// function transformFirstAndLast(array) {
//   var obj = {};
//   var lastItem = array.length -1;
//   var descriptor = Object.create(null); // no inherited properties
//   // not enumerable, not configurable, not writable as defaults
//   descriptor.value = 'static';
//   Object.defineProperty(obj, 'key', descriptor);
//   Object.defineProperty(obj, array[0], {
//     value: array[lastItem],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   });
//   return obj;
// }

// console.log(transformFirstAndLast(['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']));

// Simple solution 

// Test arrays
var newArray= ["Robert" ,"Eddy", "Frank", "Glatzel"]
var newArray2 = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];


function transformFirstAndLast(array){
  var property = array[0];
  var obj = {};
  var value = array.slice(-1)[0];

  obj[property] = value;

  console.log(obj)
}

transformFirstAndLast(newArray2);
