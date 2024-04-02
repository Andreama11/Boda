// =============================== Imagenes boda ===============================
const instagram = document.querySelector(".instagram__flex");

const instagramContent = Array.from(instagram.children);

instagramContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidder", true);
  instagram.appendChild(duplicateNode);
})
// =============================== Imagenes boda ===============================












// =============================== Contador ===============================
const days = document.querySelector("#days")
const hours = document.querySelector("#hours")
const minutes = document.querySelector("#minutes")
const seconds = document.querySelector("#seconds")
const countdown = document.querySelector('.countdown');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`june 30 ${currentYear} 16:00:00`);

let countdownInterval;

function updateCountdowntime() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

    console.log(diff);
    if (diff < 0) {
        clearInterval(countdownInterval)
        countdown.innerHTML = "Terminó"
    }
}

countdownInterval = setInterval(updateCountdowntime, 1000);
// =============================== Contador ===============================





