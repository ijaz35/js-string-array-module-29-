const numbers = [3, 6, 9, 19, 15, 11, 45, 87];
//.slice(start, end) method is used to seperate a particular portion from array. it returns a new array without end index value. Here the main array remains same in length.

const slice = numbers.slice(2, 6);
// console.log(slice);

//.splice(start, numberOfRemovedElement, newElement1, ...) method is used to delete the elements from a given array. This method returns an arry with the removed elements.we can also add new element to the array by this method
const spliceNumbers = numbers.splice(4, 2, 91, 100);
console.log(spliceNumbers);
console.log(numbers);

//so this method deletes two elements from index 4 and adds 91,100 to the main array(numbers) 
