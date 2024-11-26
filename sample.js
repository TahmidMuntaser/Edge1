// alert("Alert message!!")

function test(){
   document.getElementById("test").style.color = "red";
   document.getElementById("test").innerHTML = "Hello World!";
   document.getElementById("test").append("Test")
}

function test2(){
    const f = parseInt(document.getElementById("first").value);
    const s = parseInt(document.getElementById("second").value);
    let total = f + s;
    total = total*2;

    document.getElementById("res").innerHTML = total;
}

const car = {type: "fiat", model: "500", color: "white"};
console.log(car.type);
console.log(car);
car.type = "ww";

console.log(car.type);
console.log(car);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    child: {
        firstName: "abul",
        lastName: "Doe",
        age: 10,
        eyeColor: "red"
    }
}

person.child.age = 22;

console.log(person);


const sampleArray = [1,2,3,4,5,6,7,8,9,10];


const newPerson = {...person};
person.firstName = "Don";
console.log(person);
console.log(newPerson);


const a = [1, 2, 3];
const b = [...a];
a[0] = 22;
console.log(a); 
console.log(b); 


const val = person.firstName === "Abul" ? 1:2;
console.log(val);

let val2;
console.log(typeof(val2));
console.log(person instanceof Object);