setInterval(() => {
  const heart = document.createElement("div");
  heart.innerHTML = '<img src="images/IMG_0181.JPG" style="width: 24px; height: 24px; border-radius: 50%; object-fit: cover;" />';
  heart.style.position = "fixed";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = "22px";
  heart.style.opacity = "0.9";
  heart.style.transition = "transform 4s linear, opacity 4s linear";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.style.transform = "translateY(-100vh)";
    heart.style.opacity = "0";
  }, 50);

  setTimeout(() => heart.remove(), 4000);
}, 500);
