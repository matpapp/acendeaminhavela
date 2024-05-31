function onYouTubeIframeAPIReady() {
    new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'c7H1zqvKObM',
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    event.target.setVolume(50); // Define o volume da música (0 a 100)
}

function lightCandle() {
    const candle = document.getElementById("candle");
    candle.style.opacity = "1";
    candle.style.width = "350px"; // Aumenta a largura da vela
    candle.style.height = "700px"; // Aumenta a altura da vela

    const leftImageContainer = document.getElementById("left-image-container");
    const leftImage = document.createElement("img");
    leftImage.src = "https://i.ibb.co/dfzL0DW/right-image.png";
    leftImage.alt = "Left Image";
    leftImage.style.width = "500px"; // Define a largura maior da imagem
    leftImage.style.height = "auto";
    leftImage.style.position = "absolute";
    leftImage.style.top = "150px"; // Ajusta a posição vertical da imagem
    leftImage.style.left = "100px"; // Ajusta a posição horizontal da imagem
    leftImageContainer.appendChild(leftImage);

    const rightImageContainer = document.getElementById("right-image-container");
    const rightImage = document.createElement("img");
    rightImage.src = "https://i.ibb.co/qp1kY0h/right-image.png";
    rightImage.alt = "Right Image";
    rightImage.style.width = "500px"; // Define a largura maior da imagem
    rightImage.style.height = "auto";
    rightImage.style.position = "absolute";
    rightImage.style.top = "150px"; // Ajusta a posição vertical da imagem
    rightImage.style.right = "100px"; // Ajusta a posição horizontal da imagem
    rightImageContainer.appendChild(rightImage);
}

function extinguishCandle() {
    const candle = document.getElementById("candle");
    candle.style.opacity = "0.7";
    candle.style.width = "300px"; // Redefine a largura original da vela
    candle.style.height = "600px"; // Redefine a altura original da vela

    const leftImageContainer = document.getElementById("left-image-container");
    const leftImage = leftImageContainer.querySelector("img");

    if (leftImage) {
        leftImageContainer.removeChild(leftImage);
    }

    const rightImageContainer = document.getElementById("right-image-container");
    const rightImage = rightImageContainer.querySelector("img");

    if (rightImage) {
        rightImageContainer.removeChild(rightImage);
    }
}
