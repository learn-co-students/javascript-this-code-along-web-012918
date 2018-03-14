const app = "I don't do much."


let pbj = {
  bread: "white",
  ingredients: ["peanut butter", "jelly"],
  cut: "triangles",
  name: "peanut butter and jelly",
  serve: function() {
    console.log("here's your " + this.name + ", enjoy!");
  }
}

function Sandwich (bread, ingredients, name) {
  this.bread = bread
  this.ingredients = ingredients
  this.name = name
}

function serve() {
  console.log("here's your " + this.name + ", enjoy!");
}

let gc = new Sandwich("white", ["cheese"], "Grilled Cheese");
let pbj = new Sandwich("wheat", ["peanut butter", "raspberry jam"], "Peanut Butter & Jelly")

serve.call(gc)
serve.call(pbj)
