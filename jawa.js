var bunga = ["Mawar", "Melatih", "Anggrek", "Sakura"];

bunga.push("Tulip", "Terompet", "Bangkai");
bunga.splice()

document.write("<h3>Daftar Nama-Nama Bunga:</h3>")
document.write("<ol>");
bunga.forEach((data) => {
    document.write(`<li>${data}</li>`);
    console.log(data)
});
document.write("</ol>");