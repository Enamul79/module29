const products = [
   'dell laptop',
   'lenovo lapto with camera',
   'Asus laptop',
   ' dell compact 67 Laptop',
   'walton laptop',
   'dell iphone11',
   'TCL camera Phone',
] 

const searching = 'dell';
const outPut = [];
for(const product of products){
   if(product.toLowerCase().indexOf(searching.toLowerCase()) != -1){
      outPut.push(product);
   }
}

console.log(outPut);

const searching = 'dell';
const outPut = [];
for(const product of products){
   if(product.toLowerCase().startsWith(searching.toLowerCase())){
      outPut.push(product);
   }
}

console.log(outPut);

for(const product of products){
   if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase()) != -1){
      outPut.push(product);
   }
}

console.log(outPut);

let str = 'To be, or not to be, this is the question.'
console.log(str.startsWith('To be'));

let str = 'Do or die.'
console.log(str.startsWith('Do'));
console.log(str.endsWith('die'));

let Name = 'my friends names are very varites'
console.log(Name.startsWith('my'));

let str = 'saturday night plans'
console.log(str.startsWith('saturday'));


let str = 'Cats are the best!';
console.log(str.endsWith('best!'));

let Name = 'Muhammad Enamul Haque';
console.log(Name.length);
console.log(Name.endsWith('Haque'));

const self = 'My name is Muhammad Enamul Haque. I am a teacher. Right now I am trying to become a web developer';
const words = self.split(' ');
console.log(words);
console.log(self.length);
const withOutM = self.split('M');
console.log(withOutM);
const smallSlice = self.slice(11,32);
console.log(smallSlice);

const country = 'Bangladesh is my mother land';

const getInto = country.substr(6,17);
const getInto = country.substring(0,10);
console.log(getInto);
const country = 'Bangladesh is my mother land. ';
const love = 'I love her very much.';
const history = "it's independent in 1971.";
const glory = "it's glory newno bounds ";
const amardesh = country.concat(love).concat(history).concat(glory)
const countrylove = country + love;
console.log(amardesh);

const words = ['alim','balim', 'calim', 'dalim'];
const allJoined = words.join(' & ');
console.log(allJoined);

const numbers = [1, 2, 3, 4, 5, 6, 7];
const numbersSliced = numbers.slice( );
console.log(numbersSliced);

const nuberSpliced = numbers.splice(3,0,112,134,167);
console.log(nuberSpliced);
console.log(numbers);
const numbers = [1, 7, 3, 6, 5, 4, 2];
console.log(numbers);
const sortingNubers = numbers.sort();
console.log(sortingNubers);
const friendsName = ['abul','babul', 'dabul','mabul','chabol','nobul'];
const selectedFriends = friendsName.sort();
console.log(selectedFriends);
const reverseFriends = friendsName.reverse();
console.log(reverseFriends);