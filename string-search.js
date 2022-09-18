const arrayOfProducts = [
    'asus s510u laptop',
    'dell inspring laptop',
    'laptop lenovo 1x4e laptop',
    'yellow screen Laptop fig',
    'HTC one phone',
    'samsung Phone',
    'apple Laptop',
    'iphone7 128 gb'
];
const searching = 'Laptop';
const laptops = [];

/* //searching by indexOf() method which returns index number, if there is no index it returns -1;
for (const product of arrayOfProducts) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        laptops.push(product);
    }
}
console.log(laptops); */

/* //searching by includes() method which returns true or false;
for (const product of arrayOfProducts) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        laptops.push(product);
    }
}
console.log(laptops); */

/* //searching by startsWith() method, used for to find some word at start
for (const product of arrayOfProducts) {
    if (product.toLowerCase().startsWith(searching.toLowerCase())) {
        laptops.push(product);
    }
}
console.log(laptops); */

//searching by endssWith() method, used for to find some word at ends
for (const product of arrayOfProducts) {
    if (product.toLowerCase().endsWith('fig'.toLowerCase())) {
        laptops.push(product);
    }
}
// console.log(laptops);

const str1 = 'Bangladesh is a beautiful country.';
console.log(str1.endsWith("country")); // console show false because it ends with a full stop(.)