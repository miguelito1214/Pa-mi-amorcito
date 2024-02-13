function toggleLetter() {
    const cardContainer = document.querySelector('.card-container');
    const letter = document.querySelector('.letter');
  
    letter.classList.toggle('closed');
    cardContainer.style.display = cardContainer.style.display === 'none' ? 'block' : 'none';
  }
  