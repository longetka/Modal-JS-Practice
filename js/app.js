const storeImg = document.querySelectorAll('.store-img');
const modal = document.querySelector('.lightbox-container');
const modalImg = document.querySelector('.lightbox-item');
const close = document.querySelector('.lightbox-close');
const btnLeft = document.querySelector('.btnLeft');
const btnRight = document.querySelector('.btnRight');

close.addEventListener('click', () => {
    if (modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
});

let images = [];
images.push(storeImg.keys())

storeImg.forEach((img) => {
    images.push(img.attributes.src.value);
    
    img.addEventListener('click', (event) => {
        modal.classList.add('show');
        let imgSrc = event.target.attributes.src.value;
        modalImg.style.background = `url(${imgSrc}) center/cover fixed no-repeat`;
        
        let index = images.indexOf(imgSrc)
        
        btnLeft.addEventListener('click', (event) => {
            index--;
            if (index < 1) {
                index += (images.length - 1);
            }
            modalImg.style.background = `url(${images[index]}) center/cover fixed no-repeat`;
        });
        btnRight.addEventListener('click', (event) => {
            index++;
            if (index >= images.length) {
                index -= (images.length - 1);
            }
            modalImg.style.background = `url(${images[index]}) center/cover fixed no-repeat`
        });
    });
});