var myImg = document.getElementById("my-img");
myImg.onclick = function () {
    if (clouds.style.webkitAnimationPlayState == "paused") {
        clouds.style.webkitAnimationPlayState = "running";
        airplane.style.webkitAnimationPlayState = "running";
        hotairballoon.style.webkitAnimationPlayState = "running";
        myImg.src='/Images/pause.png';
    }
    else {
        clouds.style.webkitAnimationPlayState = "paused";
        airplane.style.webkitAnimationPlayState = "paused";
        hotairballoon.style.webkitAnimationPlayState = "paused";
        myImg.src='/Images/play.png';
    }
}