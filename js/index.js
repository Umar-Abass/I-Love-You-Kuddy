const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let yesSize = 1.0;

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html"; // redirect
});

noBtn.addEventListener("click", () => {
  // Make Yes grow a bit
  yesSize += 0.1;
  yesBtn.style.transform = `scale(${yesSize})`;
  // On larger screens move the button; on small screens just wiggle it
  if (window.innerWidth > 600) {
    const x = Math.floor(Math.random() * (window.innerWidth - 150));
    const y = Math.floor(Math.random() * (window.innerHeight - 150));
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
  } else {
    noBtn.classList.add('wiggle');
    setTimeout(() => noBtn.classList.remove('wiggle'), 700);
  }
});
