// // const app = "I don't do much."
// // function Sandwich(bread, ingredients, name) {
// //   this.bread = bread;
// //   this.ingredients = ingredients;
// //   this.name = name;
// // }

// // function serve() {
// //   console.log("here's your " + this.name + ", enjoy!");
// // }

// // function serve(customer) {
// //   console.log("Hey " + customer + ", here's your " + this.name + ", enjoy!");
// // }

// var gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
// var pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly");

// // serve.call(gc);
// // serve.call(pbj);
// // serve.apply(gc);
// // serve.apply(pbj);
// // serve.call(gc, "Terry");
// // serve.call(pbj, "Jesse");

// function deliverFood(customer, table) {
//   console.log("Delivering " + this.name + " to " + customer + " at table " + table);
// }

// deliverFood.call(gc, "Terry", "4");
// deliverFood.apply(pbj, ["Jesse", "15"]);

// function serve() {
//     if
//     // (arguments.length === 1) {
//     //   var customers = Array.prototype.slice.call(arguments);
//     //   console.log(this.name + " for " customer[0] + ". Enjoy!")
//     // } else if
//     (arguments.length > 0) {
//         var customers = Array.prototype.slice.call(arguments);
//         last = customers.pop();
//         console.log(this.name + " for " + customers.join(", ") + " and " + last + ". Enjoy!");
//     }else {
//         console.log(this.name + ". Order up!");
//     }
// }

// serve.call(gc);
// serve.call(gc, "Terry")
// serve.call(pbj, "Terry", "Tom", "Tabitha");
// serve.apply(pbj, ["Terry", "Tom", "Tabitha"]);

// function Sandwich(bread, ingredients, name) {
//   this.bread = bread;
//   this.ingredients = ingredients;
//   this.name = name;
//   this.describe = function() {
//     console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
//   }
// }

// var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");

// pbj.describe();

// var salad = {
//   ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
//   name: "Steak Caesar"
// }

// pbj.describe.call(salad);
// // pbj.describe.bind(salad);

// var describeSalad = pbj.describe.bind(salad);

// describeSalad();


function Sandwich(bread, ingredients, name) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
  this.describe = function() {
    console.log("Your " + this.name + " includes: " + this.ingredients.join(", ") + ". Yum!");
  }
}

var pbj = new Sandwich("wheat", ["chunky peanut butter", "blackberry preserves"], "PB&Jam");

var salad = {
  ingredients: ["croutons", "romaine hearts", "steak", "parmesan", "caesar dressing"],
  name: "Steak Caesar"
}

salad.describe = pbj.describe.bind(salad);

function visitTable() {
  console.log("The server is visiting " + this.name + " at table number " + this.tableNumber);
}

function Customer(name, tableNumber) {
  this.name = name;
  this.tableNumber = tableNumber;
}

//create new Customer instance
var sally = new Customer("Sally", "4");

//schedule table visit
// var visitSally = visitTable.bind(sally);
setTimeout(visitTable.bind(sally), 1000);
