document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const trendImageContainer = document.getElementById('trendImageContainer');
    const trendImage = document.getElementById('trendImage');
    const retroTradeButton = document.getElementById('retroTradeButton');
    const cooldownIndicator = document.getElementById('cooldownIndicator');
    const cooldownTimerDisplay = document.getElementById('cooldownTimer');

    const trendImages = [
        'up1.jpg.png', // Путь к изображению "вверх"
        'down1.jpg'    // Путь к изображению "вниз"
    ];

    const COOLDOWN_SECONDS = 5;
    let isInitialClick = true;

    function startCooldown() {
        startButton.disabled = true;
        cooldownIndicator.classList.remove('hidden');
        let timer = COOLDOWN_SECONDS;
        cooldownTimerDisplay.textContent = timer;

        const interval = setInterval(() => {
            timer--;
            cooldownTimerDisplay.textContent = timer;

            if (timer <= 0) {
                clearInterval(interval);
                startButton.disabled = false;
                cooldownIndicator.classList.add('hidden');
            }
        }, 1000);
    }

    function handleStartClick() {
        if (startButton.disabled) {
            return; 
        }

        // 1. Изменение стилей кнопки при первом клике
        if (isInitialClick) {
            startButton.classList.remove('start-button');
            startButton.classList.add('start-button-active');
            retroTradeButton.classList.remove('hidden');
            isInitialClick = false;
        }

        // 2. Рандомное изображение
        const randomIndex = Math.floor(Math.random() * trendImages.length);
        const selectedImage = trendImages[randomIndex];
        
        trendImage.src = selectedImage;
        trendImageContainer.classList.remove('hidden');

        // 3. Запуск кулдауна
        startCooldown();
    }

    startButton.addEventListener('click', handleStartClick);
});
