const prompt = require("prompt-sync")();

let angka1 = parseFloat(prompt("Masukkan angka pertama: "));
let operator = prompt("Masukkan operator (+, -, *, /): ").trim().toLowerCase();
let angka2 = parseFloat(prompt("Masukkan angka kedua: "));

let hasil;

switch (operator){
    case "+":
        hasil = angka1 + angka2;
        break;
    case "-":
        hasil = angka1 - angka2;
        break;
    case "*":
    case "x":
        hasil = angka1 * angka2;
        break;
    case "/":
        if (angka2 !==0){
            hasil = angka1/angka2;
        }else{
            hasil = "Error: Pembagian dengan nol!";
        }
        break;
    default:
        hasil = "Operator tidak valid!"
}

console.log(`Hasil: ${hasil}`);