// expose.js
const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectElement = document.querySelector('#horn-select');
  const playButton = document.querySelector('button');
  const audioElement = document.querySelector('audio');

  selectElement.addEventListener('change', function () {
    if (selectElement.value === 'air-horn') {
      document.querySelector('img').src = 'assets/images/air-horn.svg';
    }
    else if (selectElement.value === 'car-horn') {
      document.querySelector('img').src = 'assets/images/car-horn.svg';
    }
    else if (selectElement.value === 'party-horn') {
      document.querySelector('img').src = 'assets/images/party-horn.svg';
    }
  });

  playButton.addEventListener('click', function () {
    if (selectElement.value === 'air-horn') {
      audioElement.src = 'assets/audio/air-horn.mp3';
    }
    else if (selectElement.value === 'car-horn') {
      audioElement.src = 'assets/audio/car-horn.mp3';
    }
    else if (selectElement.value === 'party-horn') {
      audioElement.src = 'assets/audio/party-horn.mp3';
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      });
    }
    audioElement.play();
  });

  const volumeSlider = document.querySelector('#volume-controls input[type="range"]');
  const volumeIcon = document.querySelector('#volume-controls img');

  volumeSlider.addEventListener('input', function () {
    const volumeValue = volumeSlider.value;
    audioElement.volume = volumeValue / 100;

    if (Number(volumeValue == 0)) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (Number(volumeValue) < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (Number(volumeValue) < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

}

