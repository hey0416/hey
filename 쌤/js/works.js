// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Timeline 생성
let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".works",
    start: "top top", // works 섹션이 뷰포트 상단에 닿으면 고정 시작
    end: "+=400%",    // 고정이 유지되는 스크롤 거리
    pin: true,          // .works 섹션을 고정
    scrub: true,        // 스크롤과 애니메이션 동기화
  }
});

// 각 article 요소에 애니메이션 추가
timeline
  .to(".work1", { y: 0, opacity: 1, duration: 1, ease: "power3.out",   onStart: () => document.querySelector('.work1').classList.add('on') })
  .to(".work2", { y: 0, opacity: 1, duration: 1, ease: "power3.out", onStart: () => document.querySelector('.work2').classList.add('on') })
  .to(".work3", { y: 0, opacity: 1, duration: 1, ease: "power3.out", onStart: () => document.querySelector('.work3').classList.add('on') });


/* const sections = document.querySelectorAll("main");

sections.forEach((section) => {
  gsap.to(window, {
    scrollTo: {
      y: section,
      offsetY: 0, 
    },
    duration: 1,  
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: '+=200%',
      pin: true,
  
      scrub: true,          
    },
  });
}); */
