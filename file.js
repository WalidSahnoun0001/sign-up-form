let createButton = document.querySelector('.cr-btn');
let signButton = document.querySelector('.sn-btn');
let signFace = document.querySelector('.sign-face');
let logFace = document.querySelector('.log-face');
let signIn = document.querySelector('.sign-in');
let logIn = document.querySelector('.log-in');
let leftSide = document.querySelector('.side.left');
let rightSide = document.querySelector('.side.right');

createButton.onclick = function() {
        
    leftSide.style.transform = 'translateX(100%)';
    rightSide.style.transform = 'translateX(-100%)';

    leftSide.style.transition = 'transform .5s ease-in-out';
    rightSide.style.transition = 'transform .5s ease-in-out';

    leftSide.style.zIndex = '9';
    rightSide.style.zIndex = '8';

    logFace.style.display = 'none';
    signFace.style.display = 'block';

    signIn.style.display = 'none';
    logIn.style.display = 'block';

}
signButton.onclick = function() {

    leftSide.style.transform = 'translateX(0)';
    rightSide.style.transform = 'translateX(0)';

    leftSide.style.transition = 'transform .5s ease-in-out';
    rightSide.style.transition = 'transform .5s ease-in-out';

    leftSide.style.zIndex = '9';
    rightSide.style.zIndex = '8';

    logFace.style.display = 'block';
    signFace.style.display = 'none';

    signIn.style.display = 'block';
    logIn.style.display = 'none';   

}