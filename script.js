document.getElementById('btn').addEventListener('click', () => {
  const el = document.getElementById('greet');
  const now = new Date().toLocaleTimeString();
  el.textContent = `You clicked at ${now} ✅`;
  // simple DOM change to show JS working
  navigator.vibrate?.(50); // small vibration on supported devices
});
