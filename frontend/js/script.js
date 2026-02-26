document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 10px 30px rgba(37,99,235,0.3)';
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});
