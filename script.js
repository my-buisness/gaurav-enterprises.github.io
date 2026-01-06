// 🔐 password lock
const correctPassword = "chukku";

const unlockBtn = document.getElementById("unlockBtn");
const input = document.getElementById("passwordInput");
const error = document.getElementById("errorMsg");

function checkPassword() {
  if (input.value.trim().toLowerCase() === correctPassword) {
    document.getElementById("locked-screen").style.display = "none";
    document.getElementById("site-content").style.display = "block";
  } else {
    error.style.display = "block";
    input.value = "";
  }
}

unlockBtn.addEventListener("click", checkPassword);
input.addEventListener("keypress", e => {
  if (e.key === "Enter") checkPassword();
});

// 💌 open notes
const notes = [
  "you feel safe 💞",
  "i like the way you exist 🌷",
  "soft hearts only 🎀"
];

document.querySelectorAll(".note").forEach((note, i) => {
  note.addEventListener("click", () => {
    note.textContent = notes[i];
    note.style.background = "#fff";
  });
});

// 💖 surprise
document.getElementById("surpriseBtn").onclick = () => {
  document.getElementById("surpriseText").style.display = "block";
};
