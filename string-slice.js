const anthem = 'Amar Sonar Bangla Ami Tomai Valobasi';

/* //.split() method is used for split any string by a keyword, it can be a whitespace or a anyword' */

// const words = anthem.split("a");
const words = anthem.split(" ");
// console.log(words);

//.slice(x,y) is used for slicing a string form any index number(x) to  another index Number(y) but this does not return the last index value(y)

const smallSlice = anthem.slice(11, 17);
// console.log(smallSlice);

//substr() method is used to return any particular part  with any index(11) to any character (8).

const smallPart = anthem.substr(11, 8);
// console.log(smallPart);

//.subString(x,y) is used for slicing a string form any index number(x) to  another index Number(y) but this does not return the last index value(y)
const smallPart2 = anthem.substring(11, 17);
// console.log(smallPart2);

//.concat() is used to concate strings
const first = ' my name';
const second = ' : Ijaz';
const fullString = first.concat(second);
const fullString2 = first.concat(second).concat(' hossain');
// console.log(fullString);
// console.log(fullString2);

//.join() method is used to join strings
const words2 = ['alim', 'bokul', 'chatul', 'damul'];
const allJoined = words2.join(' ');
console.log(allJoined);