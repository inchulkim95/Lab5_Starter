// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.querySelector('#voice-select');
  const textArea = document.querySelector('#text-to-speak');
  const talkButton = document.querySelector('button');
  const smilyFace = document.querySelector('img');
  const synth = window.speechSynthesis;

  function populateVoices() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = '';
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }
  synth.addEventListener('voiceschanged', populateVoices);
  populateVoices();

  talkButton.addEventListener('click', function () {
    const text = textArea.value;
    const selectedVoiceName = voiceSelect.value;
    const voices = synth.getVoices();

    if (text && selectedVoiceName) {
      const utterance = new SpeechSynthesisUtterance(text);
      const selectedVoice = voices.find((voice) => voice.name === selectedVoiceName);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      utterance.onstart = function () {
        smilyFace.src = 'assets/images/smiling-open.png';
        smilyFace.alt = 'Smiling face open';
      };
      utterance.onend = function () {
        smilyFace.src = 'assets/images/smiling.png';
        smilyFace.alt = 'Smiling face closed';
      };

      synth.speak(utterance);
    } else {
      console.log('No text or voice selected');
    }
  });
}