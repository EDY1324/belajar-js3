// fungsi untuk membuat object
function person (name,age,height,weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
}

// membuat array yang berisikan object
const anak = [
    new person ("Edy", 17, 170, 60),
    new person ("Rayhan", 13, 169, 58)
];

//pemanggilan di web console
console.log(anak);
console.log("Nama:",anak[0].name);
console.log("Umur:",anak[0].age);
console.log("TB:",anak[0].height);
console.log("BB:",anak[0].weight);
console.log("Nama:",anak[1].name);
console.log("Umur:",anak[1].age);
console.log("TB:",anak[1].height);
console.log("BB:",anak[1].weight);