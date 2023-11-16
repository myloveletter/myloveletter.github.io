document.addEventListener("DOMContentLoaded", function() {
    // Function to reveal hidden elements with a delay
    function revealWithDelay(elements, delay) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.remove("hidden");
            }, index * delay);
        });
    }

    // Initial delay before starting the animation
    setTimeout(function() {
        // Elements to reveal with a delay
        var elementsToReveal = document.querySelectorAll(".love-letter h1, .love-letter p");
        
        // Start revealing the elements with a delay
        revealWithDelay(elementsToReveal, 1000);
    }, 1000); // Adjust the initial delay as needed
});
