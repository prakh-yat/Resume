const modeSwitcher = document.querySelector('#modeSwitcher');

function switchMode() {
  if (modeSwitcher.checked) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

modeSwitcher.addEventListener('change', switchMode);