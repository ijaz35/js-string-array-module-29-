function megaFriend(friends) {
    //using Array.isArray() to verify array
    if (!Array.isArray(friends)) {
        console.log('please enter an array');
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}

const friends = ['kutub', 'mahima', 'muktar ali', 'lion'];
const megaFriendName = megaFriend(friends);
// console.log(megaFriendName);



//using indexOf() method in array to search element
if (friends.indexOf('lion') != -1) {
    // console.log('lion exists!');
}


//using includes() method in array to search element
if (friends.includes('lion')) {
    // console.log('lion exists!');
}


//using .concat() method to combine arrays
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];
const combinedArray = firstArray.concat(secondArray);
console.log(combinedArray);