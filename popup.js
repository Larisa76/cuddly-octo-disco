let openBtn = document.querySelector('.open-btn');
let Popup = document.querySelector('.Popup');
let closeBtn = document.querySelector('.close-btn');


function showPopup() {
Popup.style.display = 'block'
}


function closePopup() {
Popup.style.display = 'none'
}

openBtn.addEventListener('click', showPopup);
closeBtn.addEventListener('click', closePopup);