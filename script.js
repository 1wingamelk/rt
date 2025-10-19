document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const trendImageContainer = document.getElementById('trendImageContainer');
    const trendImage = document.getElementById('trendImage');
    const retroTradeButton = document.getElementById('retroTradeButton');

    const trendImages = [
        'up1.jpg.png', // Путь к изображению "вверх"
        'down1.jpg'    // Путь к изображению "вниз"
    ];

    startButton.addEventListener('click', () => {
        // 1. Изменение кнопки START
        startButton.classList.remove('start-button');
        startButton.classList.add('start-button-clicked');
        startButton.textContent = 'START'; // Текст остается прежним, если нужно
        
        // 2. Появление нижней кнопки
        retroTradeButton.classList.remove('hidden');

        // 3. Появление либо down1.jpg, либо up1.jpg
        // Выбираем случайное изображение
        const randomIndex = Math.floor(Math.random() * trendImages.length);
        const selectedImage = trendImages[randomIndex];
        
        trendImage.src = selectedImage;
        trendImageContainer.classList.remove('hidden');

        // 4. Опционально: Отключение кнопки START после первого нажатия
        // startButton.disabled = true;

        // Если нужно, чтобы кнопка START больше не была кликабельной, 
        // можно удалить обработчик или установить startButton.disabled = true;
    }, { once: true }); // { once: true } гарантирует, что событие сработает только один раз
});
