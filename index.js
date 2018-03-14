const app = "I don't do much."


var pbj = {
  bread: 'white',
  ingredients: ['peanut butter', 'jelly'],
  cut: 'triangles'
}

var blt = new Sandwich('white', ['bacon','lettuce','tomato','mayo'],'rectangle');

var reuben = new Sandwich('rye', ['corned beef','sauerkraut','swiss','russian dressing'], 'diagonal')

pbj.serve()


function Sandwich(bread,ingredients,cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.name = name;
}

function serve(customer) {
  console.log('hey ' + customer + `here's your ` + this.name + `, enjoy!`);
}

var gc = new Sandwich('white',['cheese'], 'grilled cheese');
var pbj = new Sandwich('wheat', ['peanut butter', 'raspberry jam'], 'peanut butter & jelly');

serve.call(gc); => serve.call(gc,'jimbo');
serve.apply(pbj); => serve.apply(pbj,['jimmy'])

function deliverFood(customer, table) {
  console.log('delivering ' + this.name + 'to ' + customer + ' at table ' + table);
}

deliverFood.call(gc, 'terry','4');
deliverFood.apply(pbj, ['kim', '15']);
