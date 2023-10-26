if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
      });
  }

  const installButton = document.getElementById('installButton');
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  installButton.style.display = 'block';
  installButton.addEventListener('click', () => {
    e.prompt();
    e.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('La aplicación fue instalada con éxito');
        installButton.style.display = 'none';
      }
    });
  });
});
