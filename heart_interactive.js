const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let width, height;

function resize() {
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = width * devicePixelRatio;
  canvas.height = height * devicePixelRatio;
  ctx.setTransform(1, 0, 0, 1, 0, 0); // reset any transform
  ctx.scale(devicePixelRatio, devicePixelRatio);
}
resize();
window.addEventListener('resize', () => {
  resize();
});

function isInHeart(x, y) {
  const val = Math.pow(x * x + y * y - 1, 3) - x * x * y * y * y;
  return val <= 0;
}

const totalBilles = 5500;
const billes = [];

while (billes.length < totalBilles) {
  const x = Math.random() * 3 - 1.5;
  const y = Math.random() * 3 - 1.5;
  if (isInHeart(x, y)) {
    billes.push({
      baseX: x,
      baseY: y,
      x: x,
      y: y,
      vx: 0,
      vy: 0,
      color: ['#005f99', '#3399ff', '#003366'][Math.floor(Math.random() * 3)],
    });
  }
}

const scaleFactor = 0.9; // agrandit le cœur

function draw() {
  ctx.clearRect(0, 0, width, height);
  const scale = Math.min(width, height) / 4 * scaleFactor;
  const centerX = width / 2;
  const centerY = height / 2;

  for (const b of billes) {
    ctx.beginPath();
    ctx.fillStyle = b.color;
    ctx.shadowColor = 'rgba(0, 102, 204, 0.6)';
    ctx.shadowBlur = 2;
    ctx.arc(centerX + b.x * scale, centerY - b.y * scale, 3, 0, Math.PI * 2);
    ctx.fill();
  }
}

const mouse = { x: null, y: null, active: false };
const influenceRadius = 80;
const moveForce = 0.04;
const returnForceWhenActive = 0.1;
const returnForceWhenInactive = 1.5;
const friction = 0.8;
const maxSpeed = 0.3;

canvas.addEventListener('mousemove', e => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;
  mouse.active = true;
});
canvas.addEventListener('mouseleave', () => {
  mouse.x = null;
  mouse.y = null;
  mouse.active = false;
});

function animate() {
  const scale = Math.min(width, height) / 4 * scaleFactor;
  const centerX = width / 2;
  const centerY = height / 2;

  for (const b of billes) {
    if (mouse.active && mouse.x !== null && mouse.y !== null) {
      const px = centerX + b.x * scale;
      const py = centerY - b.y * scale;
      const dx = px - mouse.x;
      const dy = py - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < influenceRadius) {
        const force = ((influenceRadius - dist) / influenceRadius) * moveForce;
        const angle = Math.atan2(dy, dx);
        b.vx += force * Math.cos(angle);
        b.vy += force * Math.sin(angle);
      }
    }

    const returnForce = mouse.active ? returnForceWhenActive : returnForceWhenInactive;

    const dxBase = b.baseX - b.x;
    const dyBase = b.baseY - b.y;
    b.vx += dxBase * returnForce;
    b.vy += dyBase * returnForce;

    const speed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
    if (speed > maxSpeed) {
      b.vx = (b.vx / speed) * maxSpeed;
      b.vy = (b.vy / speed) * maxSpeed;
    }

    b.vx *= friction;
    b.vy *= friction;

    b.x += b.vx;
    b.y += b.vy;
  }

  draw();
  requestAnimationFrame(animate);
}

animate();
