document.addEventListener('DOMContentLoaded', function() {
    const videoWrapper = document.querySelector('.hero__video-wrapper');
    const video = document.getElementById('heroVideo');
    const playBtn = document.getElementById('playHeroVideo');

    if (video && playBtn && videoWrapper) {
        let wasPlayed = false; // Флаг, чтобы отследить первый запуск

        playBtn.addEventListener('click', function() {
            video.play();
            videoWrapper.classList.add('hero__video-wrapper--playing');
            
            // Добавляем controls после первого запуска
            if (!wasPlayed) {
                video.setAttribute('controls', '');
                wasPlayed = true;
            }
        });

        // Обработчик play (на случай, если видео запущено не через кнопку)
        video.addEventListener('play', function() {
            videoWrapper.classList.add('hero__video-wrapper--playing');
            
            // Добавляем controls после первого запуска
            if (!wasPlayed) {
                video.setAttribute('controls', '');
                wasPlayed = true;
            }
        });

        // Обработчик pause (возвращаем кнопку Play)
        video.addEventListener('pause', function() {
            videoWrapper.classList.remove('hero__video-wrapper--playing');
        });
    }
});