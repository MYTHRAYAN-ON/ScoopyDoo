$(document).ready(function(){
    $(".ham").click(function(){
      $(this).toggleClass("is-active");
    });
  });

  document.getElementById('hamid').addEventListener('click', function() {
    let navitems = document.getElementById('navitems');
    if (navitems.style.display === 'none' || navitems.style.display === '') {
        navitems.style.display = 'block';
        navitems.style.setProperty('animation', 'fadeIn 1s');
        
    } else {
        navitems.style.display = 'none';
    }
});
  




// 'use strict';

// const carouselItems = document.querySelectorAll('.carousel__item');
// //console.log(carouselItems)
// let currentItem = document.querySelector('.carousel__item--main');
// const leftBtn = document.querySelector('#leftBtn');
// const rightBtn = document.querySelector('#rightBtn');


// rightBtn.addEventListener('click', () => {
//     const currentItem = document.querySelector('.carousel__item--right');
//     const leftItem = document.querySelector('.carousel__item--main');
  
//     // Remove all classes from carousel items
//     carouselItems.forEach((item) => item.className = 'carousel__item');
  
//     // Update classes for current, left, and right items
//     currentItem.classList.add('carousel__item--main');
//     leftItem.classList.add('carousel__item--left');
//     const currentId = Array.from(carouselItems).indexOf(currentItem);
//     const rightItem = currentId === carouselItems.length - 1 ? carouselItems[0] : carouselItems[currentId + 1];
//     rightItem.classList.add('carousel__item--right');
// });

// leftBtn.addEventListener('click', () => {
//     currentItem = document.querySelector('.carousel__item--left');
//     const rightItem = document.querySelector('.carousel__item--main');

//     carouselItems.forEach((item) => item.className = 'carousel__item');

//     currentItem.classList.add('carousel__item--main');
//     rightItem.classList.add('carousel__item--right');
//     const currentId = Array.from(carouselItems).indexOf(currentItem);
//     const leftItem = currentId === 0 ? carouselItems[carouselItems.length-1] : carouselItems[currentId-1];
//     leftItem.classList.add('carousel__item--left');
// });



'use strict';

function setupCarousel(carouselId, leftBtnId, rightBtnId) {
    const carouselContainer = document.querySelector(`#${carouselId}`);
    const carouselItems = carouselContainer.querySelectorAll('.carousel__item');
    const leftBtn = document.querySelector(`#${leftBtnId}`);
    const rightBtn = document.querySelector(`#${rightBtnId}`);
    
    let currentItem = carouselContainer.querySelector('.carousel__item--main');

    rightBtn.addEventListener('click', () => {
        currentItem = carouselContainer.querySelector('.carousel__item--right');
        const leftItem = carouselContainer.querySelector('.carousel__item--main');

        carouselItems.forEach((item) => item.className = 'carousel__item');

        currentItem.classList.add('carousel__item--main');
        leftItem.classList.add('carousel__item--left');
        const currentId = Array.from(carouselItems).indexOf(currentItem);
        const rightItem = currentId === carouselItems.length - 1 ? carouselItems[0] : carouselItems[currentId + 1];
        rightItem.classList.add('carousel__item--right');
    });

    leftBtn.addEventListener('click', () => {
        currentItem = carouselContainer.querySelector('.carousel__item--left');
        const rightItem = carouselContainer.querySelector('.carousel__item--main');

        carouselItems.forEach((item) => item.className = 'carousel__item');

        currentItem.classList.add('carousel__item--main');
        rightItem.classList.add('carousel__item--right');
        const currentId = Array.from(carouselItems).indexOf(currentItem);
        const leftItem = currentId === 0 ? carouselItems[carouselItems.length - 1] : carouselItems[currentId - 1];
        leftItem.classList.add('carousel__item--left');
    });
}

// Setup both carousels
setupCarousel('carousel1', 'leftBtn1', 'rightBtn1');
setupCarousel('carousel2', 'leftBtn2', 'rightBtn2');




