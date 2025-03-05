// fungsi untuk membuat object
function person (name,age,height,weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
}
// membuat array yang berisikan object
const keluarga = [
    new person ("Edy", 17, 170, 60),
    new person ("Rayhan", 13, 169, 58),
    new person ("Habib", 6, 140, 40)
];
// Menampilkan dengan menggunakan Pengulangan
function tampilkan() {
let text = "";
keluarga.forEach(a => {
    text += `<tr>
                <td>${a.name}</td>
                <td>${a.age}</td>
                <td>${a.height}</td>
                <td>${a.weight}</td>
            </tr>`
});
document.getElementById("output").innerHTML = text;
}
//membuat fungsi mencari nama anak
function cari() {
    let searchName = document.getElementById("searchName").value.toLowerCase();
    let found = keluarga.find(a => a.name.toLowerCase() === searchName);

    if (found) {
        document.getElementById("searchResult").innerHTML = `Nama : ${found.name}, Umur: ${found.age} Tahun, TB: ${found.height} cm, BB: ${found.weight} kg.`;
    } else {
        document.getElementById("searchResult").innerHTML = "Nama tidak ditemukan.";
    }
}
//membuat fungsi menambahkan anak
function tambah() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    
    if (name && age && height && weight) {
        keluarga.push(new person(name, parseInt(age), parseInt(height), parseInt(weight)));
        tampilkan();
    } else {
        alert("Harap isi semua data!");
    }
}

function hapus() {
    let deleteName = document.getElementById("deleteName").value.toLowerCase();
    let index = keluarga.findIndex(a => a.name.toLowerCase() === deleteName);
    
    if (index !== -1) {
        keluarga.splice(index, 1);
        tampilkan();
        document.getElementById("deleteResult").innerHTML = "Nama Berhasil di Hapus.";
    } else {
        document.getElementById("deleteResult").innerHTML = "Nama Tidak berhasil di hapus.";
    }
}
tampilkan();