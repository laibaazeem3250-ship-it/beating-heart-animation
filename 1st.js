// JS Code 
  const heart = document.getElementById("heart");

  function beat() {
    heart.classList.add("beat");
    setTimeout(() => heart.classList.remove("beat"), 650);
  }

  // Lub-Dub heartbeat
  setInterval(() => {
    beat();
    setTimeout(beat, 220); 
  }, 1100);

  // Particle generator
  setInterval(() => {
    const p = document.createElement("div");
    p.className = "particle";
    p.style.left = Math.random() * window.innerWidth + "px";
    p.style.bottom = "0px";
    document.body.appendChild(p);

    setTimeout(() => p.remove(), 3000);
  }, 200);

  