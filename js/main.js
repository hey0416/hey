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
        const strengthOffsetTop = $(".strength").offset().top - headerHeight; // 헤더 높이 고려
        const strengthHeight = $(".strength").outerHeight();
    
        // strength 영역 확인
        const isInStrength = scrollTop >= strengthOffsetTop && scrollTop < strengthOffsetTop + strengthHeight;
    
        // 헤더 고정 상태 관리 (푸터 제외, strength 제외)
        if (!isInStrength) {
            if (scrollTop + windowHeight >= footerOffset + headerHeight) {
                // 푸터 영역에 도달하면 헤더는 bottom 상태
                $("header").removeClass("on").addClass("bottom");
            } else {
                // 스크롤 상태에 따라 on 클래스 추가/제거
                $("header").removeClass("bottom").addClass(scrollTop > 0 ? "on" : "");
            }
        } else {
            // strength 영역에서는 고정된 기본 상태 유지 (on, bottom 제거)
            $("header").removeClass("on bottom");
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
    // const quarterCircle = document.querySelector('.introduce .quarters .quarter2 .quarter-circle');

    // window.addEventListener('scroll', () => {
    //     const scrollY = window.scrollY;
    //     const translateX = Math.max(-scrollY / 21, 200);  // 200px로 최소값 설정, 더 빠르게 이동
    //     // rotate 범위를 -180도까지 설정하고, 더 부드럽게 회전
    //     const rotateDeg = Math.min(-90 + scrollY / 8, -180);  // 회전 각도를 -180도로 변경

    //     quarterCircle.style.transform = `translateX(${translateX}px) rotate(${rotateDeg}deg)`;
    // });

    // gsap.fromTo(".introduce .quarter-circle",
    //     {
    //         clipPath: "inset(50% 0% 0% 0% round 100% 100% 0 0)" // 시작 상태: 아무것도 보이지 않음
    //     },
    //     {
    //         clipPath: "inset(0% 0% 0% 0% round 100% 100% 0 0)", // 끝 상태: 반원이 그려진 상태
    //         duration: 0.5,                         // 애니메이션 지속 시간 1초로 설정
    //         ease: "power2.out",                 // 부드러운 애니메이션 효과
    //         scrollTrigger: {
    //             trigger: ".introduce .quarter-circle", // 반원이 그려지는 위치 설정
    //             start: "top center-=100px",         // 뷰포트 중앙에서 100px 아래에서 시작
    //             end: "top+=100px center",           // 뷰포트 중앙에서 200px 아래에서 끝
    //             scrub: false,                           // 스크롤과 애니메이션 동기화하지 않음 (즉시 애니메이션)
    //             //markers: true                           // 디버깅 마커 표시 (개발 중 확인용)
    //         }
    //     }
    // )

    // ** 4. GSAP 애니메이션 설정 **7
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
    //         );ㄹ
    //     }
    // });


});