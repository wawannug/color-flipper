//variabel acak warna latar belakang
const warnaSimpel = ["black", "white", "red", "yellow", "blue", "green", "orange", "purple"];

const warnaHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//mendefinisikan tombol
const tombolSimpel = document.querySelector(".ubah-simpel");
const tombolHex = document.querySelector(".ubah-hex");
const tulisanWarna = document.querySelector(".tulisan-warna");

//memberikan event ketika tombol diklik
tombolSimpel.addEventListener("click", function () {
    const warna = warnaAcak();
    document.body.style.backgroundColor = warnaSimpel[warna];

    tulisanWarna.innerHTML = warnaSimpel[warna];
});

tombolHex.addEventListener("click", function () {
    let warna = "#"

    for (let i = 0; i < 6; i++) {
        warna += warnaHex[hexAcak()];
        document.body.style.backgroundColor = warna;
    }
    tulisanWarna.innerHTML = warna;
});

function hexAcak() {
    return Math.floor(Math.random() * warnaHex.length);
};

function warnaAcak() {
    return Math.floor(Math.random() * warnaSimpel.length);
};

