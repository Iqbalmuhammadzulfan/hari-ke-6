const prompt = require("prompt-sync")();

const luasPersegiPanjang = (panjang, lebar) => panjang * lebar;

let panjang = parseFloat(prompt("Masukkan panjang:"));
let lebar = parseFloat(prompt("Masukkan lebar:"));

console.log(`Luas persegi panjang adalah: ${luasPersegiPanjang(panjang, lebar)}`);