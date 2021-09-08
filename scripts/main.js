/*
Requirements
array.reduce()

It is suggested that you write functions that return values, not just functions that call console.log
*/

// QUESTION 1
// Show me how to calculate the average price of all items. Please console.log the average.
// The average price is $23.63

//Used .map to create array of only prices. Used .reduce to add those prices up
const prices = items.map(function(item){
    return item.price;
});
const reducer = (first, next) => first + next;
let total = prices.reduce(reducer);
//Convert decimal value to cash notation
avgPrice = (Math.round((total*100)/items.length)/100);
console.log(`Average price of items is $${avgPrice}`);
console.log('-----------------------');



// QUESTION 2
// Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.
// "Items that cost between $14.00 USD and $18.00 USD:"
//   [
//    {
//       title: "1970s Coors Banquet Glass Beer Pitcher",
//       ...
//    },
//    {
//       title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//       ...
//    },
//    {
//       title: "Hand Painted Colorful Feather Glass",
//       ...
//    },
//    {
//       title: "Groomsman Gifts - Bottle Opener Credit Card Sized PERSONALIZED - FREE SHIPPING",
//       ...
//    }
//   ]


console.log('Items that cost between $14.00(inclusive) and $18.00(exclusive):')
//Filter the array to only include items at the specified price point
const giftCost = items.filter(function(item){
   return (item.price < 18.00 && item.price >= 14.00)
});
//create a new array of matching titles
const giftList = giftCost.map(function(item){
  return item.title;
});
giftList.forEach(element => console.log(element));
console.log('-----------------------');


// QUESTION 3
// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one 
// you find.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

//Filtering by "currency_code" = GBP
console.log('Items listed in GBP:')
const gbpPrice = items.filter(function(item){
    return (item['currency_code'] === 'GBP');
 });
 //Logging the elements of that object
 gbpPrice.forEach(element => console.log(`${element.title} costs ${element.price} ${element['currency_code']}`));
 console.log('-----------------------');


// QUESTION 4
// Show me how to find which items are made of wood. Please console.log the ones you find.
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made 
// of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted 
// Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made 
// of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

console.log('Items made of wood:')
//Filtering for values of 'wood' in 'materials' keys
const wooden = items.filter(function(item){
    return (item['materials'].includes('wood'));
 });
wooden.forEach(element => console.log(element.title));
console.log('-----------------------');



//QUESTION 5
// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, 
// three broomsticks mug  has 13 materials:
// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass  


console.log('Items made of 8+ materials:')
//filtering for items which have a meterials array 8 entries or longer
const manyMats = items.filter(function(item){
    return (item['materials'].length >= 8);
 });
manyMats.forEach(element => console.log(element.title));
console.log('-----------------------');

// QUESTION 6
// Show me how to calculate how many items were made by their sellers. Please console.log your answer.
// 18 were made by their sellers

//filtering for items whose 'who_made' key have a value of 'i_did'
const selfMade = items.filter(function(item){
    return (item['who_made'] === 'i_did');
 });
console.log(`${selfMade.length} items were made by their sellers`);


// BONUS QUESTION
// Create a second branch in your project; you may name it whatever you like
// Refactor your answers using the Lodash library and push your work to GitHub