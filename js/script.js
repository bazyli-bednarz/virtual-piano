document.addEventListener('keydown', function (event) {
    switch (event.code) {
        case 'KeyA':
        case 'KeyS':
        case 'KeyD':
        case 'KeyF':
        case 'KeyG':
        case 'KeyH':
        case 'KeyJ':
        case 'KeyW':
        case 'KeyE':
        case 'KeyT':
        case 'KeyY':
        case 'KeyU':
            playSound(event);
            break;

        default:
            console.warn('Invalid key pressed');
            break;
    }
})

function playSound(event) {
    let volume = document.querySelector("#volume-control");
    if (event.code === 'KeyA' || event.code === 'KeyS' || event.code === 'KeyD' || event.code === 'KeyF' || event.code === 'KeyG' || event.code === 'KeyH' || event.code === 'KeyJ') {
        let audio = new Audio(`white_keys/${event.key.toUpperCase()}.mp3`);
        audio.volume = volume.value / 100;
        audio.play().then();
        let pressedKeyWhite = document.getElementById(event.key.toUpperCase()+'-key');
        pressedKeyWhite.classList.add('pressed-white');
        setTimeout(function () {
            pressedKeyWhite.classList.remove('pressed-white');
        }, 300);
    } else {
        let audio = new Audio(`black_keys/${event.key.toUpperCase()}.mp3`);
        audio.volume = volume.value / 100;
        audio.play().then();
        let pressedKeyBlack = document.getElementById(event.key.toUpperCase()+'-key');
        pressedKeyBlack.classList.add('pressed-black');
        setTimeout(function () {
            pressedKeyBlack.classList.remove('pressed-black');
        }, 300);
    }
}

function playSoundOnClick(keyName) {
    let volume = document.querySelector("#volume-control");
    if (keyName === 'A' || keyName === 'S' || keyName === 'D' || keyName === 'F' || keyName === 'G' || keyName === 'H' || keyName === 'J') {
        let audio = new Audio(`white_keys/${keyName}.mp3`);
        audio.volume = volume.value / 100;
        audio.play().then();
        let pressedKeyWhite = document.getElementById(keyName+'-key');
        pressedKeyWhite.classList.add('pressed-white');
        setTimeout(function () {
            pressedKeyWhite.classList.remove('pressed-white');
        }, 300);
    } else {
        let audio = new Audio(`black_keys/${keyName}.mp3`);
        audio.volume = volume.value / 100;
        audio.play().then();
        let pressedKeyBlack = document.getElementById(keyName+'-key');
        pressedKeyBlack.classList.add('pressed-black');
        setTimeout(function () {
            pressedKeyBlack.classList.remove('pressed-black');
        }, 300);
    }
}

let keys = document.querySelectorAll('kbd');
for (let i = 0; i < keys.length; i++) {
    keys[i].onclick = function () {
        let keyLetter = keys[i].id.charAt(0);
        playSoundOnClick(keyLetter);
    }
}


// let key = document.getElementById('A-key')
// key.onclick = function () {
//   console.log(key.id)
// };

// let keysArray = [...keys];
// keysArray.forEach(kbd => {
//     kbd.onclick = playSound(kbd);
// })

// function playSound() {
//     let keyLetter = element.id;
//     console.log(keyLetter);
//     element.dispatchEvent(new KeyboardEvent('keydown', {'key': ''}))
// }