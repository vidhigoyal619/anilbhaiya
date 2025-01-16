function getRandomColor() {
    const colors = ['#ff6f61', '#6a1b9a', '#00796b', '#ffeb3b', '#0288d1'];
    return colors[Math.floor(Math.random() * colors.length)];
}

window.onload = () => {
    const body = document.body;
    const messages = document.querySelectorAll('.message');
    const gifContainers = document.querySelectorAll('.gif-container');

    setTimeout(() => {
        body.style.backgroundColor = '#f0f0f0'; // Change to light background
    }, 1000);

    let delay = 6000;

    messages.forEach((message, index) => {
        setTimeout(() => {
            message.classList.remove('hidden');
            message.style.color = getRandomColor();
        }, delay);

        delay += 4000;

        setTimeout(() => {
            message.classList.add('hidden');
        }, delay - 1000);
    });

    gifContainers.forEach((gifContainer, index) => {
        setTimeout(() => {
            gifContainer.classList.remove('hidden');
        }, delay);

        delay += 5000; // Show each GIF for 5 seconds

        setTimeout(() => {
            gifContainer.classList.add('hidden');
        }, delay - 1000);
    });
};
