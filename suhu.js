function toCelsius(suhu, dari) {
    let hasil;

    if (dari === "C") {
        hasil = suhu;
    } else if (dari === "F") {
        hasil = (suhu - 32) * 5/9;
    } else if (dari === "K") {
        hasil = suhu - 273.15;
    } else if (dari === "R") {
        hasil = suhu * 5/4;
    } else {
        hasil = null;
    }

    return hasil;
}

function fromCelsius(suhuC, ke) {
    let hasil;

    if (ke === "C") {
        hasil = suhuC;
    } else if (ke === "F") {
        hasil = (suhuC * 9/5) + 32;
    } else if (ke === "K") {
        hasil = suhuC + 273.15;
    } else if (ke === "R") {
        hasil = suhuC * 4/5;
    } else {
        hasil = null;
    }

    return hasil;
}

function konversi() {
    let input = parseFloat(document.getElementById("inputSuhu").value);
    let dari = document.getElementById("dari").value;
    let ke = document.getElementById("ke").value;

    if (isNaN(input)) {
        document.getElementById("hasil").textContent = "Masukkan angka yang valid!";
        return;
    }

    let suhuC = toCelsius(input, dari);   // pastikan nama sama persis
    let hasilAkhir = fromCelsius(suhuC, ke);

    document.getElementById("hasil").textContent = 
        `${input} ${dari} = ${hasilAkhir.toFixed(2)} ${ke}`;
}
