$(document).ready(() => {

    const lenis = new Lenis({
        duration: 3,
        smoothWheel: true,
        smoothTouch: true,
        direction: "vertical",
    });

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    gsap.registerPlugin(ScrollTrigger, Draggable)

    SplitType.create(".hero-txt-h1");

    //setting elements inital css

    gsap.set(".flair", { xPercent: -50, yPercent: -50 });

    gsap.set(".char", {
        yPercent: 100
    });

    gsap.set(".portfolio-punch .line-inner", {
        yPercent: -100
    });

    gsap.set(".mob-inner", {
        yPercent: -100
    });

    gsap.set(".animated-porfolio-wrapper", {
        yPercent: 100,
        scale: 0
    });

    gsap.set(".faq-body", {
        display: "none",
        opacity: 0,
    });

    let xTo = gsap.quickTo(".flair", "x", { duration: 0.6, ease: "power3" }),
        yTo = gsap.quickTo(".flair", "y", { duration: 0.6, ease: "power3" });

    window.addEventListener("mousemove", e => {
        xTo(e.clientX);
        yTo(e.clientY);
    });

    const flair = $('.flair');

    document.body.addEventListener('mouseenter', (e) => {
        if (window.getComputedStyle(e.target).cursor === 'pointer') {
            gsap.to(flair, { scale: 0.5, duration: 0.2 });
        }
    }, true);

    document.body.addEventListener('mouseleave', (e) => {
        if (window.getComputedStyle(e.target).cursor === 'pointer') {
            gsap.to(flair, { scale: 1, duration: 0.2 });
        }
    }, true);

    //tweens

    ScrollTrigger.create({
        trigger: ".portfolio-hero",
        start: "top top",
        end: "+=500",
        scrub: true,
        pin: true,
    })

    tl = gsap.timeline();

    tl.to(".portfolio-hero .line-inner", {
        scrollTrigger: {
            trigger: ".portfolio-hero",
            start: "top center",
            scrub: true
        },
        yPercent: -100,
        duration: 1.5,
        stagger: 0.09,
        ease: "Expo.easeInOut",
        delay: 1
    });

    ScrollTrigger.create({
        trigger: ".portfolio-punch",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
    })

    const tl_two = gsap.timeline()

    tl_two.to(".portfolio-punch .line-inner", {
        scrollTrigger: {
            trigger: ".portfolio-punch",
            start: "top center",
            scrub: true
        },
        yPercent: 0,
        duration: 1,
        stagger: 0.09,
        ease: "Expo.easeInOut",
    });

    gsap.to(".char", {
        scrollTrigger: {
            trigger: ".customer-reviews",
            toggleActions: "restart none reverse none"
        },
        yPercent: 0,
        duration: 1,
        stagger: 0.05,
        ease: "expo.inOut",
    });


    $(".button").click(function () {
        $(this).toggleClass("-menu-open")
        if ($(this).hasClass('-menu-open')) {
            gsap.to(".mob-inner", {
                yPercent: 0,
                duration: .8,
                ease: "expo.inOut"
            })

            gsap.to(".mob-inner .nav-link", {
                opacity: 1,
                delay: .5,
                stagger: 0.05,
                ease: "expo.inOut"
            })
        } else {
            gsap.to(".mob-inner .nav-link", {
                opacity: 0,
                duration: .2
            })

            gsap.to(".mob-inner", {
                yPercent: -100,
                duration: .8,
                ease: "expo.inOut"
            })

        }
    })

    $(".faq-toggler").click(function () {

        if ($(this).text() == "+") {

            $(this).text("-")

            gsap.to(".faq-body", {
                display: "inline-block",
                opacity: 1
            })
        } else {

            $(this).text("+")

            gsap.to(".faq-body", {
                opacity: 0,
                display: "none",
            })
        }

    })

    $('.clients-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });

    // Select all elements with the classes 'layer-one', 'layer-two', and 'btn-tabs'
    let layerOneElements = document.querySelectorAll(".layer-one");
    let layerTwoElements = document.querySelectorAll(".layer-two");
    let btnTabs = document.querySelectorAll(".btn-tabs");

    // Iterate over each button tab
    btnTabs.forEach((el, index) => {
        // Add event listener for mouse enter
        el.addEventListener("mouseenter", () => {
            if (!enterAnim.isActive()) enterAnim.restart();
        });

        // Add event listener for mouse leave
        el.addEventListener("mouseleave", () => {
            if (!leaveAnim.isActive()) leaveAnim.restart();
        });

        // Create enter animation timeline
        let enterAnim = gsap.timeline();
        enterAnim.to(layerOneElements[index], { left: "0%" })
            .to(layerTwoElements[index], { left: "0%" }, 0.3);
        enterAnim.reversed(true);

        // Create leave animation timeline
        let leaveAnim = gsap.timeline();
        leaveAnim.to(layerTwoElements[index], { left: "100%", scale: 1 })
            .to(layerOneElements[index], { left: "100%" }, 0.3);
        leaveAnim.reversed(true);
    });


    const player = new Plyr('#player');
    const playerTwo = new Plyr('#player-two');
})