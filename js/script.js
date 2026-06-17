'use strict';

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.nav-overlay');
const closeBtn = document.querySelector('.nav-menu__close');

if (hamburger && navMenu && overlay) {

    hamburger.addEventListener('click', () => {

        navMenu.classList.toggle('nav-menu_active');
        overlay.classList.toggle('nav-overlay_active');

        if (closeBtn) {
            closeBtn.classList.toggle('nav-menu__close_active');
        }

    });

    function closeMenu() {

        navMenu.classList.remove('nav-menu_active');
        overlay.classList.remove('nav-overlay_active');

        if (closeBtn) {
            closeBtn.classList.remove('nav-menu__close_active');
        }

    }

    overlay.addEventListener('click', closeMenu);

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
}



const track = document.querySelector('.events__track');
if (track) {

    const leftBtn = document.querySelector('.events__arrow_left');
    const rightBtn = document.querySelector('.events__arrow_right');

    const originals = [...track.children];
    const originalCount = originals.length;

    originals.forEach(card => {
        track.insertBefore(
            card.cloneNode(true),
            track.firstChild
        );
    });

    originals.forEach(card => {
        track.appendChild(
            card.cloneNode(true)
        );
    });

    let cards = document.querySelectorAll('.event-card');

    const gap = 30;
    let index = originalCount;

    function getCardWidth() {
        return cards[0].offsetWidth + gap;
    }

    function moveSlider(animation = true) {

        track.style.transition =
            animation ? '0.5s ease' : 'none';

        track.style.transform =
            `translateX(-${index * getCardWidth()}px)`;
    }

    moveSlider(false);

    rightBtn.addEventListener('click', () => {

        index++;

        moveSlider();

        if (index >= originalCount * 2) {

            setTimeout(() => {

                index = originalCount;

                moveSlider(false);

            }, 500);

        }

    });

    leftBtn.addEventListener('click', () => {

        index--;

        moveSlider();

        if (index <= originalCount - 1) {

            setTimeout(() => {

                index = originalCount * 2 - 1;

                moveSlider(false);

            }, 500);

        }

    });

    window.addEventListener('resize', () => {
        moveSlider(false);
    });

}



const scrollBtn = document.querySelector('.scroll-top');
const coverEnd = document.querySelector('#cover-end');

if (scrollBtn && coverEnd) {

    window.addEventListener('scroll', () => {

        const triggerPoint =
            coverEnd.offsetTop +
            coverEnd.offsetHeight;

        if (window.scrollY > triggerPoint) {
            scrollBtn.classList.add('scroll-top_active');
        } else {
            scrollBtn.classList.remove('scroll-top_active');
        }

    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

}


const visitorsLink = document.querySelector('.nav-menu__link');
const dropdown = document.querySelector('.nav-menu__dropdown');

visitorsLink.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    dropdown.classList.toggle('active');
});

document.addEventListener('click', function (e) {

    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }

});

document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape') {
        dropdown.classList.remove('active');
    }

});



const tabs = document.querySelectorAll('.afisha-tabs__item');

tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        tabs.forEach(item => {
            item.classList.remove('afisha-tabs__item_active');
        });

        this.classList.add('afisha-tabs__item_active');
    });
});


const pages = document.querySelectorAll('.pagination__page');
const prevPageBtn = document.querySelector('.pagination__arrow_left');
const nextPageBtn = document.querySelector('.pagination__arrow_right');

if (pages.length && prevPageBtn && nextPageBtn) {

    let currentPage = 0;

    function setActivePage(index) {

        pages.forEach(page => {
            page.classList.remove('pagination__page_active');
        });

        pages[index].classList.add('pagination__page_active');

        currentPage = index;
    }

    pages.forEach((page, index) => {

        page.addEventListener('click', () => {
            setActivePage(index);
        });

    });

    nextPageBtn.addEventListener('click', () => {

        currentPage++;

        if (currentPage >= pages.length) {
            currentPage = 0;
        }

        setActivePage(currentPage);

    });

    prevPageBtn.addEventListener('click', () => {

        currentPage--;

        if (currentPage < 0) {
            currentPage = pages.length - 1;
        }

        setActivePage(currentPage);

    });

}



const filmCard = document.querySelector('.film-card');
const expandBtn = document.querySelector('.film-card__expand');

if (filmCard && expandBtn) {
    expandBtn.addEventListener('click', () => {
        filmCard.classList.toggle('film-card_expanded');

        const text = expandBtn.querySelector('span');
        const arrow = expandBtn.querySelector('img');

        if (filmCard.classList.contains('film-card_expanded')) {
            text.textContent = 'Свернуть';
            arrow.style.transform = 'rotate(180deg)';
        } else {
            text.textContent = 'Развернуть';
            arrow.style.transform = 'rotate(0deg)';
        }
    });
}


//окно
// const modal = document.querySelector('.ticket-modal');
// const closeModal = document.querySelector('.ticket-modal__close');

// document.querySelectorAll(
//     '.movie-card__btn, .film-card__btn'
// ).forEach(button => {

//     button.addEventListener('click', () => {
//         modal.classList.add('ticket-modal_active');
//     });

// });

// closeModal.addEventListener('click', () => {
//     modal.classList.remove('ticket-modal_active');
// });

// modal.addEventListener('click', (e) => {

//     if (e.target === modal) {
//         modal.classList.remove('ticket-modal_active');
//     }

// });


// document.querySelectorAll('.ticket-modal__date')
//     .forEach(btn => {

//         btn.addEventListener('click', () => {

//             document.querySelectorAll('.ticket-modal__date')
//                 .forEach(item =>
//                     item.classList.remove('ticket-modal__date_active')
//                 );

//             btn.classList.add('ticket-modal__date_active');
//         });

//     });


// document.querySelectorAll('.ticket-modal__time')
//     .forEach(btn => {

//         btn.addEventListener('click', () => {

//             document.querySelectorAll('.ticket-modal__time')
//                 .forEach(item =>
//                     item.classList.remove('ticket-modal__time_active')
//                 );

//             btn.classList.add('ticket-modal__time_active');
//         });

//     });


// const nextBtn = document.querySelector('.ticket-modal__next');
// const backBtn = document.querySelector('.ticket-modal__back');

// const step1 = document.getElementById('step-1');
// const step2 = document.getElementById('step-2');

// if (nextBtn && step1 && step2) {

//     if (backBtn) {
//         backBtn.style.display = 'none';
//     }

//     nextBtn.addEventListener('click', () => {

//         const activeDate = document.querySelector('.ticket-modal__date_active');
//         const activeTime = document.querySelector('.ticket-modal__time_active');

//         if (!activeDate || !activeTime) {
//             alert('Выберите дату и время сеанса');
//             return;
//         }

//         step1.classList.remove('ticket-modal__step_active');
//         step2.classList.add('ticket-modal__step_active');

//         if (backBtn) {
//             backBtn.style.display = 'block';
//         }
//     });

//     if (backBtn) {
//         backBtn.addEventListener('click', () => {

//             step2.classList.remove('ticket-modal__step_active');
//             step1.classList.add('ticket-modal__step_active');

//             backBtn.style.display = 'none';
//         });
//     }

// }