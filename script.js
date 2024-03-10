document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.img-container img');

    function openFullScreen(index) {
        // Remove existing full-screen if any
        const existingFullScreen = document.querySelector('.full-screen');
        if (existingFullScreen) {
            document.body.removeChild(existingFullScreen);
        }

        // Create a new full-screen div
        const fullScreenDiv = document.createElement('div');
        fullScreenDiv.classList.add('full-screen');
        fullScreenDiv.innerHTML = `
            <span class="prev">&#10094;</span>
            <img src="${images[index].src}" class="full-screen-img">
            <span class="next">&#10095;</span>
        `;
        document.body.appendChild(fullScreenDiv);

        // Navigate to the previous image
        fullScreenDiv.querySelector('.prev').onclick = () => {
            const prevIndex = index - 1 >= 0 ? index - 1 : images.length - 1;
            openFullScreen(prevIndex);
        };

        // Navigate to the next image
        fullScreenDiv.querySelector('.next').onclick = () => {
            const nextIndex = index + 1 < images.length ? index + 1 : 0;
            openFullScreen(nextIndex);
        };

        // Close the full-screen view on clicking outside the image
        fullScreenDiv.onclick = (event) => {
            if (event.target === fullScreenDiv) {
                document.body.removeChild(fullScreenDiv);
            }
        };
    }

    images.forEach((image, index) => {
        image.onclick = () => openFullScreen(index);
    });
});
