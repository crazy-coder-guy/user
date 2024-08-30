document.querySelector('.arrow-left').addEventListener('click', () => {
      document.querySelector('.offer-wrapper').scrollBy({ left: -250, behavior: 'smooth' });
    });

    document.querySelector('.arrow-right').addEventListener('click', () => {
      document.querySelector('.offer-wrapper').scrollBy({ left: 250, behavior: 'smooth' });
    });
    const scrollAmount = 250; // Scroll distance
    const scrollSpeed = 3000; // Time in milliseconds for one scroll cycle
    const scrollContainer = document.querySelector('.offer-wrapper');

    function autoScroll() {
      const maxScrollLeft = scrollContainer.scrollWidth / 2; // Half of the container width
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      if (scrollContainer.scrollLeft >= maxScrollLeft) {
        scrollContainer.scrollLeft = 0; // Reset scroll position
      }
    }

    setInterval(autoScroll, scrollSpeed);

    // Manual scroll buttons
    document.querySelector('.arrow-left').addEventListener('click', () => {
      scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    document.querySelector('.arrow-right').addEventListener('click', () => {
      scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
    
