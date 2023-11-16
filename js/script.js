document.addEventListener("DOMContentLoaded", function() {
    var progressBar = document.getElementById("progressColor");
    
    function startProgress() {
        var width = 0;
        var interval = setInterval(function() {
            if (width >= 100) {
                clearInterval(interval);
                // Redirect to another page when progress is complete
                window.location.href = "love-letter.html";
            } else {
                width++;
                progressBar.style.width = width + "%";
            }
        }, 40); // Adjust the interval for smoother progress animation
    }

    // Start the progress when the page is loaded
    startProgress();
});
