document.addEventListener('DOMContentLoaded', function() {
    const noButton = document.querySelector('.no-button');

    noButton.addEventListener('mouseover', function() {
        const container = document.querySelector('.buttons');
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        let newLeft = Math.random() * (containerRect.width - buttonRect.width);
        let newTop = Math.random() * (containerRect.height - buttonRect.height);

        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });
});