const openBtns = document.querySelectorAll('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const popup = document.querySelector('.popup');
const mainPopup = document.querySelector('.main-popup');
const classNames = ["card-1","card-2","card-3","card-4"];

for (let i = 0; i < openBtns.length; i++) {
    openBtns[i].addEventListener('click', (e) => {
        popup.style.display = 'flex';
        mainPopup.classList.add(classNames[i]);
        document.querySelector('.text-here').innerHTML = e.target.dataset.popupText;
        mainPopup.style.cssText = 'animation:slide-in .5s ease; animation-fill-mode: forwards;';
        document.querySelector('body').classList.add("noScroll");
        document.querySelectorAll('.darken').forEach(el => el.classList.add('makeDark'));
    });
}

closeBtn.addEventListener('click', () => {
    mainPopup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
    
    setTimeout(() => {
        popup.style.display = 'none';
        classNames.forEach(c => mainPopup.classList.remove(c));
        undarken();
    }, 500);
});

window.addEventListener('click', (e) => {
    if (e.target == document.querySelector('.popup-overlay')) {
        mainPopup.style.cssText = 'animation:slide-out .5s ease; animation-fill-mode: forwards;';
        
        setTimeout(() => {
            popup.style.display = 'none';
            classNames.forEach(c => mainPopup.classList.remove(c));
            undarken();
        }, 500);
    }
});

function undarken(){
    document.querySelectorAll('.darken').forEach(el => el.classList.remove('makeDark'));
    document.querySelector('body').classList.remove("noScroll");
}
