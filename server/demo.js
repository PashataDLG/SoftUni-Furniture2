
let marks = [50, 20, 70, 60, 45, 30];

// function findMin(arr) {
//     return Math.min.apply(null, arr);
// }
// function findMax(arr) {
//     return Math.max.apply(null, arr);
// }



function findMin(arr) {
    let length = arr.length;
    let minimum = Number.MAX_SAFE_INTEGER;
    while (length--) {

        if (marks[length] < minimum) {
            minimum = marks[length];
        }
    };

    return minimum;
}
function findMax(arr) {
    let length = arr.length;
    let maximum = Number.MIN_SAFE_INTEGER;
    while (length--) {

        if (marks[length] > maximum) {
            maximum = marks[length];
        }
    };

    return maximum;
};

console.log(findMin(marks));
console.log(findMax(marks));



const obj = {
    name: 'petar',
    age: 23,
};

console.log(obj);

const newObject = {
    name: 'john',
    age: 23,
    newProto: {
        kids: true,
        count: 2
    },
    get(lastName) {
        return this.name + ' ' + lastName
    },

    set(name) {
        this.name = name;
    }
};

newObject.set('George');
console.log(newObject.get('Borissov'));


{
    let myFunction = function fun1(){
    console.log("This is a first definition");
    }
    myFunction();
   }


   for (var i = 0; i < 4; i++) { // global scope
    setTimeout(() => console.log(i));
  }

  for (let i = 0; i < 4; i++) { // block scope
    setTimeout(() => console.log(i));
  }

  console.log(`This is string sentence
     'This is string sentence 2`);