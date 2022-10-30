// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.getElementById('horn-select');
  var hornSelected = false
  const hornImage = document.querySelector('img');
  const volume = document.getElementById('volume');
  const btn = document.querySelector('button');
  const audio = document.querySelector('audio');
  var canvas = document.getElementById('html');
  const jsConfetti = new JSConfetti({ canvas });
  var showConfetti = false

  horn.addEventListener('change', (e) => {
    hornSelected = true
    if (e.target.value == 'air-horn'){
      hornImage.src = 'assets/images/air-horn.svg';
      hornImage.alt = 'Air horn image selected';
      audio.src = 'assets/audio/air-horn.mp3';
      showConfetti = false;
    } else if (e.target.value == 'car-horn'){
      hornImage.src = 'assets/images/car-horn.svg';
      hornImage.alt = 'Car horn image selected';
      audio.src = 'assets/audio/car-horn.mp3';
      showConfetti = false;
    } else if (e.target.value == 'party-horn'){
      hornImage.src = 'assets/images/party-horn.svg';
      hornImage.alt = 'Party horn image selected';
      audio.src = 'assets/audio/party-horn.mp3';
      showConfetti = true;
    }
  });

  volume.addEventListener('change', (e) => {
    const image = document.querySelector('div img');
    if (e.target.value == 0){
      image.src = 'assets/icons/volume-level-0.svg';
      image.alt = 'Volume level 0';
    } else if (e.target.value < 33){
      image.src = 'assets/icons/volume-level-1.svg';
      image.alt = 'Volume level 1';
    } else if (e.target.value < 67){
      image.src = 'assets/icons/volume-level-2.svg';
      image.alt = 'Volume level 2';
    } else {
      image.src = 'assets/icons/volume-level-3.svg';
      image.alt = 'Volume level 3';
    }
    audio.volume = e.target.value/100;
  });

  btn.addEventListener('click', (e) => {
    if (hornSelected){
      audio.play();
      if (showConfetti){
        jsConfetti.addConfetti();
      }
    }
  });
}
