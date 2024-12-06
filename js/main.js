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
        const translateX = Math.max(-scrollY / 5, 250);  // 채워지는 효과
        const rotateDeg = Math.min(-90 + scrollY / 10, -270); // 회전 효과

        quarterCircle.style.transform = `translateX(${translateX}px) rotate(${rotateDeg}deg)`;
    });


    // ** 4. GSAP 애니메이션 설정 **
    // const images = document.querySelectorAll(".animation .right .img_box img");
    // const imgBoxHeight = 300; // img_box의 높이 vh 단위로 설정
    // const numImages = images.length; // 이미지 개수

    // images.forEach((img, index) => {
    //     const sectionHeight = imgBoxHeight / numImages; // 이미지 하나당 할당된 높이 비율
    //     if (index === 0) {
    //         // 첫 번째 이미지는 고정되자마자 나타나도록 설정
    //         gsap.set(img, { opacity: 1, transform: "translateY(0)" });
    //     } else {
    //         // 나머지 이미지는 순차적으로 나타남
    //         gsap.fromTo(
    //             img,
    //             {
    //                 opacity: 0, // 숨김 상태
    //                 transform: "translateY(50px)" // 아래로 이동
    //             },
    //             {
    //                 opacity: 1, // 나타남
    //                 transform: "translateY(0)", // 제자리
    //                 scrollTrigger: {
    //                     trigger: ".animation .right .img_box",
    //                     start: () => `top+=${index * sectionHeight}vh top`, // 각 이미지 시작 지점
    //                     end: () => `top+=${(index + 1) * sectionHeight}vh top`, // 끝나는 지점
    //                     scrub: true // 스크롤 동기화
    //                 }
    //             }
    //         );
    //     }
    // });

    
});