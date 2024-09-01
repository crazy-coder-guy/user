document.addEventListener('DOMContentLoaded', function() {
  const scrollAmount = 250; // Scroll distance
  const scrollSpeed = 3000; // Time in milliseconds for one scroll cycle
  const scrollContainer = document.querySelector('.offer-wrapper');

  function autoScroll() {
      // Scroll the container to the right
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      // If scrolled to the end, reset to the start
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
          scrollContainer.scrollLeft = 0;
      }
  }

  setInterval(autoScroll, scrollSpeed);

  // Arrow button event listeners
  document.querySelector('.arrow-left').addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  document.querySelector('.arrow-right').addEventListener('click', () => {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});


    // Manual scroll buttons
    document.querySelector('.arrow-left').addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    document.querySelector('.arrow-right').addEventListener('click', () => {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    document.addEventListener('DOMContentLoaded', function() {
      const scrollButtons = [
          { buttonId: 'scrollLeft-vegetableList', listId: 'vegetableList', scrollAmount: -300 }, // Scroll left
          { buttonId: 'scrollRight-vegetableList', listId: 'vegetableList', scrollAmount: 300 },  // Scroll right
          { buttonId: 'scrollLeft-fruitList', listId: 'fruitList', scrollAmount: -300 }, // Scroll left
          { buttonId: 'scrollRight-fruitList', listId: 'fruitList', scrollAmount: 300 },  // Scroll right
          { buttonId: 'scrollLeft-herbsList', listId: 'herbsList', scrollAmount: -300 }, // Scroll left
          { buttonId: 'scrollRight-herbsList', listId: 'herbsList', scrollAmount: 300 }   // Scroll right
      ];
  
      scrollButtons.forEach(({ buttonId, listId, scrollAmount }) => {
          document.getElementById(buttonId).addEventListener('click', () => {
              const list = document.getElementById(listId);
              list.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          });
      });
  });
  
  