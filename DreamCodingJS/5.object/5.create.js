// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name}: â¤`);
//   },
// };

// const orange = {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name}: đś`);
//   },
// };

// ěěąě í¨ě - ěě ęą°ëĽź ë°ěě˛ëź íëě í¨ěëĄ ěŹěŠí  ě ěë¤.

function Fruit(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  this.display = () => {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this; // ěëľ ę°ëĽ
}

const apple = new Fruit("apple", "â¤");
const orange = new Fruit("orange", "đś");

console.log(apple);
console.log(orange);
