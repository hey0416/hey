gsap.registerPlugin(ScrollTrigger);

// Timeline 생성
let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".works",
    start: "top top", // works 섹션이 뷰포트 상단에 닿으면 고정 시작
    end: "+=400%",   // 고정이 유지되는 스크롤 거리
    pin: true,       // .works 섹션을 고정
    scrub: true,     // 스크롤과 애니메이션 동기화
  }
});

// 각 article 요소에 애니메이션 추가
timeline
  .to(".work1", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    onStart: () => document.querySelector('.work1').classList.add('on'),
    onReverseComplete: () => document.querySelector('.work1').classList.remove('on'), // 역방향 스크롤 시 효과 제거
  })
  .to(".work2", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    onStart: () => document.querySelector('.work2').classList.add('on'),
    onReverseComplete: () => document.querySelector('.work2').classList.remove('on'),
  })
  .to(".work3", {
    y: 0,
    duration: 1,
    ease: "power3.out",
    onStart: () => document.querySelector('.work3').classList.add('on'),
    onReverseComplete: () => document.querySelector('.work3').classList.remove('on'),
  });


gsap.fromTo(".introduce .quarter-circle",
  {
    clipPath: "inset(0% % 100% 0% round 100% 100% 0 0)" // 시작 상태: 아무것도 보이지 않음
  },
  {
    clipPath: "inset(0% 0% 0% 0% round 100% 100% 0 0)", // 끝 상태: 반원이 그려진 상태
    duration: 0.7,                         // 애니메이션 지속 시간 1초로 설정
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
