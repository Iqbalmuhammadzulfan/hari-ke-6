function hitungBMI() {
  let berat = parseFloat(document.getElementById("berat").value);
  let tinggi = parseFloat(document.getElementById("tinggi").value) / 100; // ubah cm ke meter

  if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0) {
    document.getElementById("hasil").textContent = "Input tidak valid!";
    return;
  }

  let bmi = (berat / (tinggi * tinggi)).toFixed(2);
  let kategori = "";

  if (bmi < 18.5) {
    kategori = "Kurus";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    kategori = "Berat badan berlebih";
  } else {
    kategori = "Obesitas";
  }

  document.getElementById("hasil").textContent = `BMI Anda: ${bmi} (${kategori})`;
}
