// const EventEmitter = require("node:events");
const PizzaShop = require("./pizza-shop"); 
const DrinkMachine = require("./drink-machine");

// const event = new EventEmitter();

// event.on("order-pizza", (size, toppings) => {
//     console.log(`Order recieved: Baking a ${size} pizza  with ${toppings}`);
// })

// event.on("order-pizza", (size) => {
//     if(size === "large"){
//         console.log("Serving a complimentary drink");
//     }
// })

// event.emit("order-pizza", "large", "mushroom");

const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (size, toppings) => {
    console.log(`Order recieved: Baking a ${size} pizza with ${toppings}`)
    drinkMachine.serving(size);
})

pizzaShop.order("large", "mushroom");
pizzaShop.displayOrderNumber();


