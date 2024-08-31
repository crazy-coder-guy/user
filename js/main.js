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
    document.addEventListener("DOMContentLoaded", function() {
      const oneHour = 3600000; // 1 hour in milliseconds
  
      // Assume you have an array of products
      const products = [product1, product2, ...]; // Example array of products
  
      products.forEach(product => {
          const labelId = `label-${product.name}`;
          const label = document.getElementById(labelId);
          const currentTime = new Date().getTime();
          
          // Check if the product was added within the last hour
          if (currentTime - product.addedTime > oneHour) {
              if (label) {
                  label.style.display = "none"; // Hide the label if more than 1 hour has passed
              }
          } else {
              if (label) {
                  label.style.display = "block"; // Ensure the label is visible
              }
  
              // Set timeout to hide the label after the remaining time
              setTimeout(function() {
                  if (label) {
                      label.style.display = "none";
                  }
              }, oneHour - (currentTime - product.addedTime));
          }
      });
  });