document.addEventListener('DOMContentLoaded', () => {

    // ** 1. AOS 초기화 **
    AOS.init({
        duration: 1800, // 애니메이션 지속 시간
        once: false,    // 스크롤 반복 여부
    });



    // ** 2. 스크롤 이벤트 처리 **
    $(window).on("scroll", function () {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const footerOffset = $("footer").offset().top;
        const headerHeight = $("header").outerHeight();

        // 헤더 고정 상태 관리
        if (scrollTop > 0) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
        }

        // 푸터 전환 처리
        if (scrollTop + windowHeight >= footerOffset + headerHeight) {
            $("header").removeClass("on").addClass("bottom");
        } else {
            $("header").removeClass("bottom").addClass(scrollTop > 0 ? "on" : "");
        }

        // 로고 상태 변경
        const logoImg = document.querySelector('.logo');
        if (scrollTop > 0) {
            logoImg.classList.add('on');
        } else {
            logoImg.classList.remove('on');
        }
    });



    // ** 3. 반원 애니메이션 **
    const quarterCircle = document.querySelector('.introduce .quarters .quarter2 .quarter-circle');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const translateX = Math.max(-scrollY / 20, -180); // 채워지는 효과
        const rotateDeg = Math.min(-360 + scrollY / 90, 0); // 회전 효과

        quarterCircle.style.transform = `translateX(${translateX}px) rotate(${rotateDeg}deg)`;
    });


    // ** 4. GSAP 애니메이션 설정 **
    gsap.registerPlugin(ScrollTrigger);

    // ** (1) Animation 섹션의 Left 고정 애니메이션 **
    gsap.to(".animation .left", {
        scrollTrigger: {
            trigger: ".animation",
            start: "top top",  // 애니메이션 시작 위치
            end: "+=100",      // 애니메이션 끝 위치
            pin: true          // 요소 고정
        }
    });

    // ** (2) Animation 섹션의 이미지 순차 애니메이션 **
    const images = document.querySelectorAll(".animation .right .img_box ul li img");
    const imgBoxHeight = 300; // img_box 높이
    const numImages = images.length; // 이미지 개수

    images.forEach((img, index) => {
        const sectionHeight = imgBoxHeight / numImages; // 각 이미지의 높이 비율
        if (index === 0) {
            gsap.set(img, { opacity: 1, transform: "translateY(0)" }); // 첫 번째 이미지는 고정
        } else {
            gsap.fromTo(
                img,
                { opacity: 0, transform: "translateY(50px)" }, // 초기 상태
                {
                    opacity: 1, transform: "translateY(0)", // 나타나는 상태
                    scrollTrigger: {
                        trigger: ".animation .right .img_box ul",
                        start: () => `top+=${index * sectionHeight}vh top`,
                        end: () => `top+=${(index + 1) * sectionHeight}vh top`,
                        scrub: true, // 스크롤 동기화
                    }
                }
            );
        }
    });



    // 5. 장점 스와이퍼


});
