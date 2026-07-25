// Ambient hero animation: two interfering sine waves (teal = engineering/physics,
// amber = music) drifting in and out of phase. Purely decorative, paused for
// users who prefer reduced motion.
(function () {
  const canvas = document.getElementById("wave-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let w, h, dpr;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  window.addEventListener("resize", resize);
  resize();

  function drawWave(t, amp, freq, speed, phase, color, lineWidth) {
    ctx.beginPath();
    const midY = h * 0.55;
    for (let x = 0; x <= w; x += 4) {
      const y =
        midY +
        Math.sin((x / w) * freq * Math.PI * 2 + t * speed + phase) *
          amp *
          (0.4 + 0.6 * Math.sin(x / w * Math.PI));
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  function frame(t) {
    ctx.clearRect(0, 0, w, h);
    drawWave(t / 1000, h * 0.09, 2.2, 0.6, 0, "rgba(89, 224, 201, 0.55)", 1.6);
    drawWave(t / 1000, h * 0.06, 3.1, 0.9, 1.8, "rgba(232, 167, 101, 0.4)", 1.4);
    drawWave(t / 1000, h * 0.04, 1.4, 0.4, 3.4, "rgba(89, 224, 201, 0.25)", 1);
    if (!prefersReduced) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();
