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
function tampilkan(data = keluarga) {
let text = "";
data.forEach(a => {
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

    if (searchName === "") {
        tampilkan(keluarga);
        return;
    }

    let filtered = keluarga.filter(a => a.name.toLowerCase().includes(searchName));

    if (filtered.length > 0) {
        tampilkan(filtered);
    } else {
        document.getElementById("output").innerHTML = "<tr><td colspan='4'>Nama tidak ditemukan.</td></tr>";
    }
}
//fungsi membuka modal/form
function openModal() {
    document.getElementById("modalTambah").showModal();
}
//fungsi menutup modal/form
function closeModal() {
    document.getElementById("modalTambah").close();
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
        closeModal();
    } else {
        alert("Harap isi semua data!");
    }
}
//fungsi menghapus
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