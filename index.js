document.addEventListener('DOMContentLoaded', () => {
    createSnow();
});

function createSnow() {
    const container = document.getElementById('snow');
    if (!container) return; // Error check

    const snowflakeCount = 50; 

    for (let i = 0; i < snowflakeCount; i++) {
        const snow = document.createElement('div');
        snow.className = 'snowflake';
        // Use a standard bullet or asterisk if '●' isn't rendering
        snow.innerHTML = '●'; 
        
        const size = (Math.random() * 5 + 2) + 'px';
        const left = (Math.random() * 100) + 'vw';
        const duration = (Math.random() * 10 + 7) + 's'; // Slower fall
        const delay = (Math.random() * 5) + 's';
        const opacity = Math.random() * 0.7 + 0.3;

        snow.style.left = left;
        snow.style.fontSize = size;
        snow.style.animationDuration = duration;
        snow.style.animationDelay = delay;
        snow.style.opacity = opacity;

        container.appendChild(snow);
    }
}
