import confetti from "canvas-confetti";
import Typed from "typed.js";

const typed = new Typed("#typedJs", {
  strings: ["Economic Islamic.", "Syafi'iyah.", "Badminton."],
  typeSpeed: 65,
  loop: true,
  backDelay: 1000,
  cursorChar: "_",
  shuffle: true,
  fadeOut: true,
  fadeOutClass: "typed-fade-out",
  fadeOutDelay: 500,
});

const myCanvas = document.createElement("canvas");
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -10;

const confettiBtn = document.getElementById("confettiBtn");
document.body.append(myCanvas);

confettiBtn.addEventListener("click", () => {
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});
