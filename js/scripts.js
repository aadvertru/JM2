const readMore = document.getElementById('readMore')
const showMore = document.getElementById('showMore')

function showAll(selector, textHidden, textShowed) {
    document.getElementById('contentAll').classList.toggle("showAll")
    selector.classList.toggle('shown')
    if (selector.textContent === textHidden) {
        selector.textContent = textShowed
    } else {
        selector.textContent = textHidden
    }
    console.log('clicked')
}

readMore ? readMore.onclick = () => showAll(readMore, 'Читать далее', 'Свернуть') : null
showMore ? showMore.onclick = () => showAll(showMore, 'Показать все', 'Скрыть') : null


// SWIPER ON RESIZE
const breakpoint = window.matchMedia( '(min-width:321px)' );
let mySwiper;

const breakpointChecker = function() {
    if ( breakpoint.matches === true ) {
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
        return;
    } else if ( breakpoint.matches === false ) {
        return enableSwiper();
    }
};

const enableSwiper = function() {
    mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        slidesPerView: 'auto',
        keyboardControl: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
        },
        paginationClickable: true,
    });
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();