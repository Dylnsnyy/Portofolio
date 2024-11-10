const textElement = document.getElementById("animated-text");
const texts = ["Web Developer", "Developer", "Web Designer", "Youtuber", "Script Writer"];
let index = 0;

function changeText() {
    textElement.textContent = texts[index];
    index = (index + 1) % texts.length;  // Kembali ke awal jika mencapai akhir array
}

setInterval(changeText, 2000);  // Ganti teks setiap 2 detik
