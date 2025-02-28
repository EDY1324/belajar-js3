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
    new person ("Rayhan", 13, 169, 58),
    new person ("Habib", 6, 140, 40)
];
// Menampilkan dengan menggunakan Pengulangan
let text = "";
anak.forEach(a => {
    text += `<p>Nama: ${a.name}</p>`;
    text += `<p>Umur: ${a.age} Tahun</p>`;
    text += `<p>TB: ${a.height} cm</p>`;
    text += `<p>BB: ${a.weight} Kg</p>`;
    text += `<p>----------------------</p>`;
    console.log(`Nama: ${a.name}`);
    console.log(`Umur: ${a.age} Tahun`);
    console.log(`TB: ${a.height} cm`);
    console.log(`BB: ${a.weight} Kg`);
    console.log(`----------------------`);
});
document.getElementById("p4").innerHTML = text;
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
console.log("Nama:",anak[2].name);
console.log("Umur:",anak[2].age);
console.log("TB:",anak[2].height);
console.log("BB:",anak[2].weight);
//pemanggilan menggunakan DOM
document.getElementById("p0").innerHTML = "Nama: " + anak[0].name + " Umur: " + anak[0].age + " TB: " + anak[0].height + " BB: " + anak[0].weight;
document.getElementById("p1").innerHTML = "Nama: " + anak[1].name + " Umur: " + anak[1].age + " TB: " + anak[1].height + " BB: " + anak[1].weight;
document.getElementById("p2").innerHTML = "Nama: " + anak[2].name + " Umur: " + anak[2].age + " TB: " + anak[2].height + " BB: " + anak[2].weight;
document.getElementById("p3").innerHTML = "-----------------------------------------------------";