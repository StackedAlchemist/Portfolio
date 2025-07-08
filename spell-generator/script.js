const spells = [
  "Ignis Lux — Flame of Light",
  "Aetheris Vox — Voice of the Void",
  "Umbra Velo — Cloak of Shadows",
  "Tempus Fractum — Shatter Time",
  "Vitae Nexus — Bind Life",
  "Glacies Orbis — Orb of Ice",
  "Fulmen Arcanum — Arcane Thunder"
];

function castSpell() {
  const output = document.getElementById("spell-output");
  const randomSpell = spells[Math.floor(Math.random() * spells.length)];
  output.textContent = randomSpell;
  output.classList.remove("animate");
  void output.offsetWidth; // force reflow
  output.classList.add("animate");
  output.style.textShadow = "0 0 15px #00ffc8";
  playSound();
  burstParticles();
}

function playSound() {
  const sound = document.getElementById("spell-sound");
  sound.currentTime = 0;
  sound.play();
}

function burstParticles() {
  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    document.body.appendChild(particle);

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 80 + 20;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    particle.style.left = `${window.innerWidth / 2}px`;
    particle.style.top = `${window.innerHeight / 2 - 100}px`;

    particle.animate([
      { transform: `translate(0, 0)`, opacity: 1 },
      { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
    ], {
      duration: 800,
      easing: 'ease-out'
    });

    setTimeout(() => particle.remove(), 800);
  }
}
