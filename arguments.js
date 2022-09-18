//arguments is a object .you can use it to handle many arguments(mare than parameters);
function addNumbers(num1, num2) {
    let sum = 0;
    for (const number of arguments) {
        sum = sum + number;
    }
    return sum;
}
const result = addNumbers(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5);
// console.log(result);


function fullName(firstName, lastName) {
    //arguments is a object. we can get the value by index agruments[0]; 
    console.log(arguments); //[Arguments] { '0': 'Md', '1': 'Ijaz', '2': 'hossain', '3': 'Tanvir' }
    let fullName = '';
    for (const name of arguments) {
        fullName = fullName + name + ' ';

    }
    return fullName;
}
const myName = fullName('Md', 'Ijaz', 'hossain', 'Tanvir');
console.log(myName);