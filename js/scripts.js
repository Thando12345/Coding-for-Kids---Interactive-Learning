// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery-image');

    // Interactivity: Clicking on an image will zoom in slightly
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            image.classList.toggle('zoomed');
        });
    });

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    lazyImages.forEach(image => {
        image.addEventListener('load', () => {
            image.classList.add('loaded');
        });
    });
});

// Add class for zoom effect in the CSS when clicked
const style = document.createElement('style');
style.innerHTML = `
    .zoomed {
        transform: scale(1.2);
        transition: transform 0.5s ease;
    }
`;
document.head.appendChild(style);
