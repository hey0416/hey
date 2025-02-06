document.addEventListener("DOMContentLoaded", () => {
    // Swiper 초기화
    const swiper2 = new Swiper(".card", {
        effect: "cards",
        grabCursor: true,
        on: {
            slideChange: function () {
                updateTextBox(this.activeIndex); // 슬라이드 변경 시 호출
            },
        },
    });

    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            cardswiper.slideNext();
        });
    });

    // txt_box 업데이트 함수
    function updateTextBox(activeIndex) {
        // 모든 txt_box 내부의 div 요소 선택
        const textBoxes = document.querySelectorAll(".txt_box > div");

        // 모든 txt_box에서 on 클래스 제거
        textBoxes.forEach((box) => box.classList.remove("on"));

        // 현재 슬라이드에 해당하는 txt_box에 on 클래스 추가
        const targetBox = document.querySelector(`.txt_box${activeIndex + 1}`);
        if (targetBox) {
            targetBox.classList.add("on");
        }
    }
    // 초기 상태 설정 (첫 번째 슬라이드)
    updateTextBox(0);
});
