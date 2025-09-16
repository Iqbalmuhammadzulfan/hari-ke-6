const prompt = require("prompt-sync")();

// fungsi menghitung luas lingkaran
const luasLingkaran = (r) => Math.PI * r * r;

let r = parseFloat(prompt("Masukkan jari-jari lingkaran: "));

console.log(`Luas lingkaran dengan jari-jari ${r} adalah: ${luasLingkaran(r)}`);

