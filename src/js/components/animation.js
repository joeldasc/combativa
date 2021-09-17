import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin);

window.addEventListener( 'load', function() {
    var optionsX = {
        x: 0,
        autoAlpha: 1,
        delay: 0.2
    }
    var optionsY = {
        y: 0,
        autoAlpha: 1,
        delay: 0.2
    }
    var tl = gsap.timeline({
        defaults: {
            duration: 0.5
        }
    });
    var tl2 = gsap.timeline({
        defaults: {
            duration: 0.5
        }
    });
    gsap.config({
        nullTargetWarn: false,
    });
    tl.to( '.cbtiva__whatsapp', {
        autoAlpha: 1,
        delay: 0.3
    })
    .to( '.header .header__logo:nth-child(1)', optionsX )
    .to( '.header .header__logo:nth-child(2)', optionsX )
    .to( '.cbtiva__home__col .info > h2', optionsY )
    .to( '.cbtiva__home__col .info h1', optionsY )
    .to( '.info__event h2', optionsY )
    .to( '.animated1', optionsX )
    .to( '.animated2', optionsX )
    .to( '.info__event h4', optionsY )
    .to( '.animated3', optionsX )
    .to( '.cbtiva__form .text h2', optionsY )
    .to( '.cbtiva__form .text p', optionsY )
    .to( '.cbtiva__form form', optionsY );

    tl2.to( '.cbtiva__wrapper .logo img', optionsY )
    .to( '.animated-text1', optionsY )
    .to( '.animated-text2', optionsY )
    .to( '.animated-img', optionsY )
    .to( '.animated-text3', optionsY )
    .to( '.cbtiva__wrapper .cbtiva__btn', optionsY )
    .to( '.logo-footer', optionsY )
});
