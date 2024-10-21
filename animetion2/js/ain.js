const items = document.querySelectorAll('.img-item');

for ( let i = 0; i < items.length; i++ ) {
    const keyframes = {
        opacity: [0, 1],
    };

    const options = {
        duration: 600,
        delay: i * 300,
        fill: 'forwards',

        // direction: 'alternate',
        // iterations: 'Infinity',
    };

    items[i].animate(keyframes, options);
}