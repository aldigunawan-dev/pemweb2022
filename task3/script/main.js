const parkaCard = document.getElementById('parkaCard');
const parka = document.getElementById('parka');
const jeansCard = document.getElementById('jeansCard');
const jeans = document.getElementById('jeans');
const fleeceCard = document.getElementById('fleeceCard');
const fleece = document.getElementById('fleece');
const katunCard = document.getElementById('katunCard');
const katun = document.getElementById('katun');

  parkaCard.addEventListener('click', () => {
    const link = parkaCard.querySelector('a');
    window.location.href = link.href;
  });
  jeansCard.addEventListener('click', () => {
    const link = jeansCard.querySelector('a');
    window.location.href = link.href;
  });
  fleeceCard.addEventListener('click', () => {
    const link = fleeceCard.querySelector('a');
    window.location.href = link.href;
  });
  katunCard.addEventListener('click', () => {
    const link = katunCard.querySelector('a');
    window.location.href = link.href;
  });
