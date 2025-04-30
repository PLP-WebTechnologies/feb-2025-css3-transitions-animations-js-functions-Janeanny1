function savePreferences() {
    const color = document.getElementById('colorPicker').value;
    const fontSize = document.getElementById('fontSize').value;
    const theme = document.getElementById('themeSelect').value;
  
    localStorage.setItem('bgColor', color);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('theme', theme);
  
    applyPreferences(color, fontSize, theme);
  
    const btn = document.getElementById('saveBtn');
    btn.classList.remove('animate-btn');
    void btn.offsetWidth;
    btn.classList.add('animate-btn');
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const color = localStorage.getItem('bgColor') || '#ffffff';
    const fontSize = localStorage.getItem('fontSize') || '16px';
    const theme = localStorage.getItem('theme') || 'light';
  
    document.getElementById('colorPicker').value = color;
    document.getElementById('fontSize').value = fontSize;
    document.getElementById('themeSelect').value = theme;
  
    applyPreferences(color, fontSize, theme);
  });
  
  function applyPreferences(color, fontSize, theme) {
    document.body.style.backgroundColor = color;
    document.body.style.fontSize = fontSize;
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
  }
  