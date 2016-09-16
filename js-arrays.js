// js array practice
// 1. create an array called "food" and put your 3 favourite foods in it
var food = ['maggie', 'pizza', 'rice', 'tacos'];

// 2. display the first item in the array
console.log(food[0]);

// 3. display the food items each on a new line
for (var i = 0; i < food.length; i++) {
  console.log(food[i]);
}

// 3a. this is the same as 3. above
for (f in food) {
  console.log(food[f]);
}

// 4. display this: 'Food: food1, food2, food3'
console.log('Food: ' + food.toString());

// 5. display food and ingredients below with ingredients indented with a tab
var foods = [
  ['sushi', ['rice', 'seaweed', 'fish']], 
  ['tacos', ['tortillas', 'meat', 'cheese', 'lettuce']], 
  ['pizza', ['dough', 'cheese', 'sauce']]
];

for (var i = 0; i < foods.length; i++) {
  console.log(foods[i][0]); // print food name - 1st element in sub-array
  
  // loop through the ingredient array - at position one of the upper array
  for (var j = 0; j < foods[i][1].length; j++) {
    console.log('\t' + foods[i][1][j]);
    
    // i is the current food item
    // 1 is the list of ingredients
    // j is the current ingredient in the inner loop
  }
}

// 5a.
for (var f in foods) {
  console.log(foods[f][0] + '\n\t' + foods[f][1].join('\n\t'));
}



