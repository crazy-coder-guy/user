document.addEventListener("DOMContentLoaded", function() {
    const offerWrapper = document.querySelector('.offer-wrapper');
    const cards = Array.from(document.querySelectorAll('.offer-card'));
    let cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight, 10); // Card width + margin
    let scrollAmount = 0;

    // Duplicate the cards to create an infinite scroll effect
    cards.forEach(card => {
        offerWrapper.appendChild(card.cloneNode(true));
    });

    function updateCardWidth() {
        // Update cardWidth based on the new width of cards
        cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight, 10);
    }

    function moveToNextCard() {
        updateCardWidth();
        scrollAmount += cardWidth;
        const totalWidth = cardWidth * cards.length;

        if (scrollAmount >= totalWidth) {
            scrollAmount = 0;
            offerWrapper.style.transition = 'none';
            offerWrapper.style.transform = `translateX(0)`;
            // Force reflow to reset the position
            offerWrapper.offsetHeight; // Trigger reflow
            offerWrapper.style.transition = 'transform 0.5s ease-in-out';
        } else {
            offerWrapper.style.transform = `translateX(-${scrollAmount}px)`;
        }
    }

    // Update card width on resize
    window.addEventListener('resize', moveToNextCard);

    setInterval(moveToNextCard, 3000); // Move to the next card every 3 seconds
});
