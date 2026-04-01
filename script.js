const moods = [
  {
    name: "Chill 🌊",
    colors: ["#00c6ff", "#0072ff"],
    quote: "Relax. Everything is under control."
  },
  {
    name: "Focus 🧠",
    colors: ["#f7971e", "#ffd200"],
    quote: "Stay locked in."
  },
  {
    name: "Romantic 💖",
    colors: ["#ff758c", "#ff7eb3"],
    quote: "Love the little things."
  },
  {
    name: "Dark Mode 🖤",
    colors: ["#141e30", "#243b55"],
    quote: "Silence speaks louder."
  },
  {
    name: "Energy ⚡",
    colors: ["#f953c6", "#b91d73"],
    quote: "You got this. Keep going!"
  }
];

let currentGradient = "";
let isPlaying = false;

function generateMood() {
  const random = moods[Math.floor(Math.random() * moods.length)];

  const gradient = `linear-gradient(-45deg, ${random.colors[0]}, ${random.colors[1]}, #000, #fff)`;

  document.body.style.background = gradient;
  document.body.style.backgroundSize = "400% 400%";

  const moodEl = document.getElementById("mood");
  const quoteEl = document.getElementById("quote");

  // 💫 animation
  moodEl.style.opacity = 0;
  quoteEl.style.opacity = 0;

  setTimeout(() => {
    moodEl.innerText = random.name;
    quoteEl.innerText = random.quote;

    moodEl.style.opacity = 1;
    quoteEl.style.opacity = 1;
  }, 200);

  currentGradient = gradient;
}

function copyColor() {
  navigator.clipboard.writeText(currentGradient);
  alert("Gradient copied!");
}

// 🎵 MUSIC
function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  if (!isPlaying) {
    music.play();
    btn.classList.add("music-active");
    isPlaying = true;
  } else {
    music.pause();
    btn.classList.remove("music-active");
    isPlaying = false;
  }
}