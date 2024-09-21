window.onload = () => {
        document.body.classList.remove("container");
      };
      
      // Seleccionamos el botón, el contenedor de las flores, y el elemento de audio
      const toggleButton = document.getElementById('toggleStyle');
      const flowersContainer = document.querySelector('.flowers');
      const backgroundMusic = document.getElementById('backgroundMusic');
      
      // Ruta de las canciones
      const originalSong = './aud/amazul.mp3';  // Ruta de la canción original
      const fiestaSong = './aud/fiesta.mp3';      // Ruta de la canción para el modo fiesta
      
      // Función para alternar entre modo original y modo fiesta
      toggleButton.addEventListener('click', () => {
        // Alternamos la clase 'fiesta' en el contenedor de las flores
        flowersContainer.classList.toggle('fiesta');
        // Cambiar texto del botón y la canción según el modo activo
        if (flowersContainer.classList.contains('fiesta')) {
          toggleButton.textContent = 'Modo Original';
          changeMusic(fiestaSong);  // Cambiamos a la canción de fiesta
        } else {
          toggleButton.textContent = 'Modo Fiesta';
          changeMusic(originalSong);  // Volvemos a la canción original
        }
      });
      
      // Función para cambiar la música
      function changeMusic(song) {
        backgroundMusic.pause();              // Pausar la música actual
        backgroundMusic.src = song;           // Cambiar la fuente de la música
        backgroundMusic.load();               // Cargar la nueva canción
        backgroundMusic.play();               // Reproducir la nueva canción
      }
      