// Carga la API de YouTube IFrame
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var startTime = 0; // Comienza al comienzo (0 segundos)
var endTime = 50;   // Termina en el segundo 50 (50 segundos)

// Crea el reproductor de video
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-background', {
        videoId: '-uY51GY5tT8', // ID del video
        height: '360',
      width: '100%',
        playerVars: {
            autoplay: 1,
            loop: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            fs: 0,
            cc_load_policy: 0,
            iv_load_policy: 3,
            autohide: 1,
            mute: 1, // Muted para que no comienze con sonido
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


//function onPlayerReady(event) {
  //  event.target.playVideo();
//}

function onPlayerReady(event) {
    event.target.seekTo(startTime); // Ir al tiempo de inicio cuando el reproductor esté listo
  }
  
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
      // Verificar si hemos alcanzado el tiempo de finalización
      if (player.getCurrentTime() >= endTime) {
        player.seekTo(startTime); // Volver al inicio
        player.playVideo();
      }
    } else if (event.data == YT.PlayerState.ENDED) {
      player.seekTo(startTime); // Volver al inicio si el video termina completamente
      player.playVideo();
    }
  }