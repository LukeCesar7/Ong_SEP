// ── PIX COPY ──
function copyPix() {
  const key = document.getElementById('pixKeyDisplay').textContent.trim();
  navigator.clipboard.writeText(key).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.textContent = '✅ Chave copiada!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = '📋 Copiar chave Pix';
      btn.classList.remove('copied');
    }, 2500);
  });
}

// ── SMOOTH SCROLL HELPERS ──
function scrollTo(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
