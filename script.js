//semua ini adalah pembelajan saya(Edy Prabowo) tentang JavaScript
//ini adalah object dan properti pertama
const person = {
    name: "Aoi Kazuma",
    age: 17,
    tall: 170,
    eyeColor: "Blue"
};
document.getElementById("p0").innerHTML = person.name + "," + person.tall + "," + person.age + "," + person.eyeColor;
console.log(person);

//ini adalah object dan properti ke 2
const person2 = {
    name: "Edy Prabowo",
    age: 17,
    tall: 180,
    eyeColor: "Brown"
};

//pengulangan
let text = "";
for (let x in person2) {
    text += person2[x] + " " + "<br>";
};
document.getElementById("p1").innerHTML = text;
console.log(text);

//ini adalah object dan properti ke 3
const person3 = {
    name: "Kazumi",
    age: 17,
    tall: 160,
    eyeColor: "Pink"
};

//ini menggunakan Object.values()
const myArray = Object.values(person3);

document.getElementById("p2").innerHTML = myArray;
console.log(myArray);

//fungsi konstruktor untuk Object Person4
function person4 (name,age,tall,eye) {
    this.name = name;
    this.age = age;
    this.tall = tall;
    this.eyeColor = eye;
    this.nationality = "Indosesia";
}

//membuat 2 Person4 Object
const ayah = new person4("Kugaa", 51, 185, "Blue");
const ibu = new person4("Nami", 39, 178, "Brown");

document.getElementById("p3").innerHTML = "Ayahku dari" + ayah.nationality + ". Ibuku dari" + ibu.nationality;
console.log(person4);