/*
Requirements
Using the global items variable created in items.js, use array.map(), array.reduce(), array.forEach(), 
and array.filter() to help you through the assignment questions

The answers should be logged out to your console using console.log()

Make sure the output matches the answers below each question

Please comment your code as you walk through your process

It is suggested that you write functions that return values, not just functions that call console.log

Publish your project using GitHub Pages
*/

// QUESTION 1
// Show me how to calculate the average price of all items. Please console.log the average.
// The average price is $23.63

//Used For...in loop to grab the value from the objects inside the array and 
//added them up
total = 0;
for (const num in items) {
    total = total += items[num].price;
};
totalCents = total * 100;
avgPrice = totalCents/items.length;
avgPrice = Math.round(avgPrice);
avgPrice = avgPrice / 100;
//And then divided by number of items in the array.
console.log(`Average price of items is $${avgPrice}`);







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



//Filter the array to only include items at the specified price point
const giftCost = items.filter(function(item){
   return (item.price < 18.00 && item.price >= 14.00)
});
//create a new array of matching titles
const giftList = giftCost.map(function(item){
  return item.title;
});
console.log(giftList);



// QUESTION 3
// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one 
// you find.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

//Filtering by "currency_code" = GBP
console.log('Items listed in GBP')
const gbpPrice = items.filter(function(item){
    return (item['currency_code'] === 'GBP');
 });
 //Logging the elements of that object
 console.log(`${gbpPrice[0].title} costs ${gbpPrice[0].price} ${gbpPrice[0]['currency_code']}`);
 // Cheating a bit here, as I know it is an array of 1.


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
const wooden = items.filter(function(item){
    return (item['materials'].includes('wood'));
 });
for (i = 0; i < wooden.length; i++){
    console.log(wooden[i].title)
};




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
const manyMats = items.filter(function(item){
    return (item['materials'].length >= 8);
 });
for (i = 0; i < manyMats.length; i++){
    console.log(manyMats[i].title)
};

// QUESTION 6
// Show me how to calculate how many items were made by their sellers. Please console.log your answer.
// 18 were made by their sellers

const selfMade = items.filter(function(item){
    return (item['who_made'] === 'i_did');
 });
console.log(`${selfMade.length} items were made by their sellers`);


// BONUS QUESTION
// Create a second branch in your project; you may name it whatever you like
// Refactor your answers using the Lodash library and push your work to GitHub