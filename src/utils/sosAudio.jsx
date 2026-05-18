let audio = null;

export const playSOS = () => {
  if (!audio) {
    audio = new Audio("/sounds/sos.mp3");
    audio.loop = true;
    audio.volume = 1;
  }

  audio.play().then(() => {
    console.log("🔊 SOUND PLAYING");
  }).catch(err => {
    console.log("❌ SOUND BLOCKED:", err);
  });
};

export const stopSOS = () => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
};