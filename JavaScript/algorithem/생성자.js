function FishBread(flavor, price) {
  this.flavor = flavor;
  this.price = price;
  this.base = "flour";
}

let bread_1 = new FishBread("cream", 1200);
console.log(bread_1);

let bread_2 = new FishBread("redbean", 1000);
console.log(bread_2);

let bread_3 = new FishBread("milk", 2000);
console.log(bread_3);

function User(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
  console.log(new.target);
}

let result_1 = User("john");
console.log(result_1);
let result_2 = new User("john");
console.log(result_2);
