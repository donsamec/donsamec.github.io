// This file contains JavaScript code for any dynamic functionality on the website, such as handling the masonry grid layout for the photo section and any interactive elements.

document.addEventListener("DOMContentLoaded", function() {
    // Initialize masonry layout for photo section
    const photoGrid = document.querySelector('.photo-grid');
    if (photoGrid) {
        const masonry = new Masonry(photoGrid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });
    }

    // Add any additional interactive functionality here
});