const hitungLuas = document.getElementById("hitungLuas");
hitungLuas.addEventListener("click", function () {
  const alasLuas = document.getElementById("alasLuas");
  const nilaiAlas = alasLuas.value;

  const tinggiLuas = document.getElementById("tinggiLuas");
  const nilaiTinggi = tinggiLuas.value;

  const hasil = (1 / 2) * nilaiAlas * nilaiTinggi;
  const hasilLuas = document.getElementById("hasilLuas");
  hasilLuas.innerHTML =
    "L = 1/2 x a x t" +
    "<br />" +
    "L = 1/2 x " +
    nilaiAlas +
    "x " +
    nilaiTinggi +
    "<br />" +
    "L = " +
    hasil;
});

const resetLuas = document.getElementById("resetLuas");
resetLuas.addEventListener("click", function () {
  const hasilLuas = document.getElementById("hasilLuas");
  hasilLuas.innerHTML = " ";
});

const hitungKeliling = document.getElementById("hitungKeliling");
hitungKeliling.addEventListener("click", function () {
  const s1 = document.getElementById("s1");
  const s1Input = parseFloat(s1.value);

  const s2 = document.getElementById("s2");
  const s2Input = parseFloat(s2.value);

  const s3 = document.getElementById("s3");
  const s3Input = parseFloat(s3.value);

  const hasil = s1Input + s2Input + s3Input;
  const hasilKeliling = document.getElementById("hasilKeliling");
  hasilKeliling.innerHTML =
    "K = S1 + S2 + S3" +
    "<br />" +
    "K = " +
    s1Input +
    "+" +
    s2Input +
    "+" +
    s3Input +
    "<br />" +
    "K = " +
    hasil;
});

const resetKeliling = document.getElementById("resetKeliling");
resetKeliling.addEventListener("click", function () {
  const hasilKeliling = document.getElementById("hasilKeliling");
  hasilKeliling.innerHTML = " ";
});
