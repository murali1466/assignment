
const cards = document.querySelectorAll('.box-container');
const sizes = document.querySelectorAll('.show');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const radio = card.querySelector('input[type="radio"]');
    const showEle = card.querySelector('.show');
    radio.checked = true;
    cards.forEach(c => c.classList.remove('selected'));
    sizes.forEach(s => s.classList.remove('visible'));
    card.classList.add('selected');
    showEle.classList.add('visible');
  });
});