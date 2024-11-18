/*=============== 
SHOW MENU 
===============*/

const navMenu = document.getElementById('navMenu');
const navToggle = document.getElementById('navToggle');
const navClose = document.getElementById('navClose');

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-btn');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-btn');
    });
}

/*===============
Galeria Menu
===============*/  
function imgGallery() {
    const mainImg = document.querySelector('.details-img'),
        smallImg = document.querySelector('.details-small-img');
        
    smallImg.forEach((img) => {
        img.addEventListener("click", function (){
            mainImg.src = this.src;
        })
    })
}

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper(".categories-container", {
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

        breakpoints: {
            350: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 24,
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 24,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 24,
            },
            1400: {
                slidesPerView: 6,
                spaceBetween: 24,
            },
    },
});


/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".new-container", {
        spaceBetween: 24,
        loop: true,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    
        breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});

    /*=============== PRODUCTS TABS ===============*/
    const tabs = document.querySelectorAll("[data-target]"),
        tabsContents = document.querySelectorAll("[content]");
    
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
    
        tabsContents.forEach((tabsContent) => {
            tabsContent.classList.remove("active-tab");
        });
    
        target.classList.add("active-tab");
    
        tabs.forEach((tab) => {
            tab.classList.remove("active-tab");
        });
    
        tab.classList.add("active-tab");
        });
});