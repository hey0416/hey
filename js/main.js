document.addEventListener('DOMContentLoaded', () => {
    // DOM 로드 후에 observer 설정
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    const target = document.querySelector('.introduce .quarters .quarter2 .q_container');
    if (target) {
        observer.observe(target);
    } else {
        console.error('.introduce .quarters .quarter2 .q_container 요소를 찾을 수 없습니다.');
    }

    // AOS 설정
    AOS.init({
        duration: 1800,
        once: false,
    });

    // 스크롤 이벤트
    $(window).on("scroll", function () {
        const scrollTop = $(window).scrollTop();
        const windowHeight = $(window).height();
        const footerOffset = $("footer").offset().top;
        const headerHeight = $("header").outerHeight();

        // header 상태 변경
        if (scrollTop > 0) {
            $("header").addClass("on");
        } else {
            $("header").removeClass("on");
        }

        // footer 상태 변경
        if (scrollTop + windowHeight >= footerOffset + headerHeight) {
            $("header").removeClass("on").addClass("bottom");
        } else {
            $("header").removeClass("bottom").addClass(scrollTop > 0 ? "on" : "");
        }

        // logo 이미지 변경
        const logoImg = document.querySelector('.logo img');
        if (logoImg) {
            if (scrollTop > 0) {
                logoImg.classList.add('on');
            } else {
                logoImg.classList.remove('on');
            }
        }
    });

    // Swiper 애니메이션 초기화
    let swiper = new Swiper(".right", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
    });
});

gsap.fromTo(".introduce .quarter-circle",
    {
        clipPath: "inset(0% 100% 100% 0% round 50% 50% 100% 0%)" // 시작: 아무것도 보이지 않음 (4분의 1 영역)
    },
    {
        clipPath: "inset(0% 0% 50% 50% round 50% 50% 50% 0%)",  // 끝 상태: 반원이 그려진 상태
        duration: 1.5,                      // 애니메이션 지속 시간 1초로 설정
        ease: "power2.out",                 // 부드러운 애니메이션 효과
        scrollTrigger: {
            trigger: ".introduce .quarter-circle", // 반원이 그려지는 위치 설정
            start: "top center-=100px",         // 뷰포트 중앙에서 100px 아래에서 시작
            end: "top+=100px center",           // 뷰포트 중앙에서 200px 아래에서 끝
            scrub: false,                           // 스크롤과 애니메이션 동기화하지 않음 (즉시 애니메이션)
            // markers: true                           // 디버깅 마커 표시 (개발 중 확인용)
        }
    }
); 