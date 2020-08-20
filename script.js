function getSound(soundType) {
  const sounds = querySelector(`audio[class = 'sound${soundType}']`);
  return sounds.play();
}

function play(buttonType) {
    buttons = querySelectorAll('button');
    buttonType = buttons.keyCode;
        switch (buttonType) {
            case 78: getSound(78);
            break;
            case 90: getSound(90);
            break;
            case 79: getSound(79);
            break;
            case 84: getSound(84);
            break;
            case 72: getSound(72);
            break;
          }
}

document.addEventListener('keyup', play);
