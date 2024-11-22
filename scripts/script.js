// JavaScript to adjust the video size based on scroll
window.addEventListener("scroll", () => {
    const video = document.getElementById("background-video");
    const scrollPosition = window.scrollY;

    // Adjust video size based on scroll
    if (scrollPosition > 50) {
        video.style.width = "120%"; // Slight zoom-in effect
        video.style.height = "auto";
    } else {
        video.style.width = "100%"; // Default size
        video.style.height = "auto";
    }
});
