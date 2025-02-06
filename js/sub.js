// Right 섹션 이미지 순차 애니메이션
document.addEventListener('DOMContentLoaded', () => {
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

      // 애니메이션 효과
      let swiper = new Swiper(".right", {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
    });
});