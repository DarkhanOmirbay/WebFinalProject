var currentAudio = null;

function playSound(soundSrc) {
  if (currentAudio) {
    currentAudio.pause();
  }
  currentAudio = new Audio(soundSrc);
  currentAudio.play();
}

var elements1 = document.getElementsByClassName("hero-art cards hero-left-top");
for (var i = 0; i < elements1.length; i++) {
  elements1[i].addEventListener("click", function (e) {
    e.preventDefault();
    playSound("sounds/first.mp3");
  });
}

var elements2 = document.getElementsByClassName("hero-art cards hero-left-bottom");
for (var i = 0; i < elements2.length; i++) {
  elements2[i].addEventListener("click", function (e) {
    e.preventDefault();
    playSound("sounds/second.mp3");
  });
}



var elements3 = document.getElementsByClassName("hero-art cards hero-right");
for (var i = 0; i < elements3.length; i++) {
  elements3[i].addEventListener("click", function (e) {
    e.preventDefault();
    playSound("sounds/third.mp3");
  });
}
    // let angle = 0;
    // const div = document.querySelector('svg');
    // window.setInterval(rotate, 20);

    // function rotate() {
    //   div.style.transform = `rotate(${angle}deg)`;
    //   angle += 1;
    // }

    // function rotateSVG(elementId) {
    //   let angle = 0;
    //   const svgElement = document.querySelector(`#${elementId}`);
    //   const svgOriginX = 0; // Замените на необходимую точку вращения X (координата X центра элемента)
    //   const svgOriginY = 0; // Замените на необходимую точку вращения Y (координата Y центра элемента)
    //   const rotationSpeed = 1; // Скорость вращения в градусах

    //   window.setInterval(rotate, 20);

    //   function rotate() {
    //     angle += rotationSpeed;
    //     svgElement.style.transformOrigin = `${svgOriginX}px ${svgOriginY}px`;
    //     svgElement.style.transform = `rotate(${angle}deg)`;
    //   }
    // }

    rotateSVG('svg-1'); // Вызов функции для первого SVG-элемента
    rotateSVG('svg-2'); // Вызов функции для второго SVG-элемента
    rotateSVG('svg-3'); // Вызов функции для третьего SVG-элемента

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            behavior: 'smooth',
            top: targetElement.offsetTop,
          });
        }
      });
    });


    function bigImg(x) {
      x.style.height = "20px";
      x.style.width = "20px";
    }

    function normalImg(x) {
      x.style.height = "14px";
      x.style.width = "14px";
    }


    const buttonClickSound = document.getElementById("buttonClickSound");
    const buttons = document.querySelectorAll(".btn");

    function playButtonClickSound() {
        buttonClickSound.currentTime =
        0; // Сброс времени воспроизведения для возможности многократного воспроизведения
        buttonClickSound.play();
    }

    buttons.forEach(button => {
        button.addEventListener("click", playButtonClickSound);
    });
