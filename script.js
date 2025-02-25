//Deklarasi
let s = 6;
let p = 9;
let l = 10;
let a = 20;
let b = 30;
let c = 4;
let d = 7;
let t = 70;
let r = 5;
let d1 = 65;
let d2 = 46;

//Persegi
function luasPersegi(s) {
    return s * s;
}

function kelilingPersegi(s) {
    return 4 * s;
}

console.log("Persegi")
console.log("Luas:", luasPersegi(s));
console.log("Keliling:", kelilingPersegi(s));

//Persegi Panjang
function luasPersegiPanjang(p,l) {
     return p * l;
}

function kelilingPersegiPanjang(p,l) {
    return 2 * (p + l);
}

console.log("Persegi Panjang")
console.log("Luas:",luasPersegiPanjang(p,l));
console.log("Keliling:",kelilingPersegiPanjang(p,l));

//Jajar Genjang
function luasJajarGenjang(a,t) {
    return a * t;
}

function kelilingJajarGenjang(a,b,c,d) {
    return a + b + c + d;
}

console.log("Jajar Genjang")
console.log("Luas: ",luasJajarGenjang(a,t));
console.log("Keliling: ",kelilingJajarGenjang(a,b,c,d));

//Segitiga
function luasSegitiga(a,t) {
    return 0.5 * a * t;
}

function kelilingSegitiga(a,b,c) {
    return a + b + c;
}

console.log("Segitiga")
console.log("Luas: ", luasSegitiga(a,t));
console.log("Keliling: ", kelilingSegitiga(a,b,c));

//Belah Ketupat
function luasBelahKetupat(d1,d2) {
    return (d1 * d2) / 2;
}

function kelilingBelahKetupat(s) {
    return 4 * s;
}

console.log("Belah Ketupat")
console.log("Luas: ", luasBelahKetupat(d1,d2));
console.log("Keliling: ", kelilingBelahKetupat(s));

//Layang-Layang
function luasLayangLayang(d1,d2) {
    return (d1 * d2) / 2;
}

function kelilingLayangLayang(a,b) {
    return 2 * (a + b);
}

console.log("Layang-Layang");
console.log("luas: ", luasLayangLayang(d1,d2));
console.log("Keliling: ", kelilingLayangLayang(a,b));

//Trapesium
function luasTrapesium(a,b,t) {
    return 0.5 * (a + b) * t;
}

function kelilingTrapesium(a,b,c,d) {
    return a + b + c + d;
}

console.log("Trapesium");
console.log("Luas: ", luasTrapesium(a,b,t));
console.log("Keliling: ", kelilingTrapesium(a,b,c,d));

//Lingkaran
function luasLingkaran(r) {
    return Math.PI * r * r;
}

function kelilingLingkaran(r) {
    return 2 * Math.PI * r;
}

console.log("Lingkaran");
console.log("Luas: ", luasLingkaran(r));
console.log("Keliling: ", kelilingLingkaran(r));