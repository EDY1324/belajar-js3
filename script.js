function kali(angka){
    return angka * 9;
}
hasil = kali(4);
console.log(hasil)

hasil = kali(9);
console.log(hasil)


function sayHello(message = "ILY") {
    console.log("Pesan: " + message);
}
sayHello();