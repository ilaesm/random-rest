let drink = ["Sprite", "Water", "Milk", "Pickle Juice"];
let food = ["Omakase", " a grilled chicken salad", " an oven-baked risotto", "Mushroom Pizza"];
let appetizer = ["Taquitos","Calamari", "Chicken Wings", "Truffle Fries", "Garlic Bread"];

 const randomIndex = array => {
    return Math.floor(Math.random() * array.length);
};

const getDrink = () => {
    let drinks = drink[randomIndex(drink)];
    return drinks
};


const getFood = () => {
    let foods = food[randomIndex(food)];
    return foods;
};

const getApp = () => {
    let appetizers = appetizer[randomIndex(appetizer)];
    return appetizers;
};

const createMessage = () => {
    let food = getFood();
     let drink = getDrink();
      let appetizer = getApp();
      document.getElementById("header").innerHTML = `ur starting off with ${appetizer} and ${drink}. Your main course is ${food}, enjoy!`;

      
};
createMessage();
