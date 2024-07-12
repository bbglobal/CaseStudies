$(document).ready(() => {

    gsap.registerPlugin(ScrollTrigger, CSSRulePlugin)


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


    function activateTab(tab_id) {
        $(".tab-btn").removeClass('active');
        $(".tab-content").removeClass('active');

        $("[data-tab='" + tab_id + "']").addClass('active');
        $("#" + tab_id).addClass('active');
    }

    // Extract tab identifier from URL path if present
    var path = window.location.pathname;
    var pathSegments = path.split('/');
    var tab_id = pathSegments[pathSegments.length - 1]; // Assuming the tab ID is the last segment

    // If the last segment is a valid tab ID, activate the corresponding tab
    if ($("[data-tab='" + tab_id + "']").length) {
        activateTab(tab_id);
    }

    $(".tab-btn").click(function () {
        var tab_id = $(this).attr('data-tab');
        activateTab(tab_id);
    });


    // var rule = CSSRulePlugin.getRule(".websites::after");
    // const tl = gsap.timeline();

    // tl.to(rule, {
    //     top: "100%",
    //     ease: "expo.in"
    // })

});
