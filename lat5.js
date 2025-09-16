const tambah = (a,b) => a + b;
const kurang = (a,b) => a - b;
const kali = (a,b) => a * b;
const bagi = (a,b) => b !== 0 ? a / b: "Tidak bisa dibagi 0";

const hitung = () => {
    let a= parseFloat(document.getElementById("angka1").value);
    let b= parseFloat(document.getElementById("angka2").value);
    let op = document.getElementById("operator").value;
    let hasil;

    if (op === "+") {
        hasil = tambah(a,b);
    }else if (op === "-") {
        hasil = kurang(a,b);
    }else if (op === "*") {
        hasil = kali(a,b);
    }else if (op === "/") {
        hasil = bagi(a,b);
    }else{
        hasil = "Operator tidak valid"
    } 

    document.getElementById("hasil").textContent = `Hasil: ${hasil}`;
}
