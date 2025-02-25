// Anonymous Function (harus pakai return jika ingin multi-line)
let tambah = function (a,b) {
    return a + b;
}
console.log("Anonymous:",tambah(9,6));

// Arrow Function (bisa implicit return jika satu baris)
let kali = (a,b) => a * b;
console.log("Arrow:",kali(6,9));

// Anonymous Function (this tergantung pemanggilan)
let person1 = {
    name: "Kazuma",
    sayHallo: function(){
        console.log(`Hello, my name is ${this.name}`);
    }
};
person1.sayHallo();

//Arrow Function (this tetap mengacu ke konteks luar)
let person2 = {
    name: "Edy",
    sayHallo: () => {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person2.sayHallo();

//dia hanya bisa menggunakan code ini
const greet = (name) => `Haloo!, aku ${name}`;
console.log(greet("Edy"));