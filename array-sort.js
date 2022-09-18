const numbers = [3, 8, 5, 1, 6, 0, 2, 4, 7];

// .sort() method is used to sort items of an array
/* const sortedArray = numbers.sort();
console.log(sortedArray);
*/

//use .reverse() method is used to reverse the items of an array

/* const reverseArray = numbers.reverse();
console.log(reverseArray); */

//we can use two methods as well as strings. It sorts on the basis of first letter

/* const laptop = ['dell', 'lenovo', 'hp', 'asus', 'macbook', 'fujitsu', 'mbcbook'];
const sortLaptop = laptop.sort();
console.log(sortLaptop);

//we use .sort() and .reverese() at the same time if we want to sort an array items first and then reverse it
const sortLaptopReverse = laptop.sort().reverse();
console.log(sortLaptopReverse); */


//javascript can not able to sort [1, 21, 3, 44, 57, 89, 11, 7] this kind of array. But by the help of comparing function .sort() method can sort it.

const numberArray = [1, 21, 3, 44, 57, 89, 11, 7];
const sortNumberArray = numberArray.sort(function (a, b) {
    return a - b;
});
console.log(sortNumberArray);