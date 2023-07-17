export default function reproducirMusica() {
  // Get a reference to the headphones icon element
  var iconoAudifonos = document.getElementById("icono-audifonos");

  // Get a reference to the audio element
  var audio = document.getElementById("audio");
  audio.volume = 0.2;

  // Play the audio when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    audio.play().catch(function (error) {
      // Handle any errors that may occur during audio playback
      console.error("Error playing audio:", error);
    });
  });

  // Add a click event to the headphones icon
  iconoAudifonos.addEventListener("click", function () {
    // Check if the audio is currently paused
    if (audio.paused) {
      // If paused, play the audio and change the icon to pause
      audio.play();
      iconoAudifonos.classList.remove("fa-play");
      iconoAudifonos.classList.add("fa-pause");
    } else {
      // If playing, pause the audio and change the icon to play
      audio.pause();
      iconoAudifonos.classList.remove("fa-pause");
      iconoAudifonos.classList.add("fa-play");
    }
  });
}
