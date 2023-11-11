const tl = gsap.timeline();

tl.from(".nav-item", {
  onStart: function () {
    $(".nav-item").textillate({ in: { effect: "fadeInLeft" } });
  },
})
  .from(".img1", {
    opacity: 0,
  })
  .from([".p-text--1", ".h1-text", ".btn-know"], {
    opacity: 0,
    x: -50,
  })
  .from([".number", ".p-text--2", ".box"], {
    opacity: 0,
    x: -30,
  })
  .to([".left-img--1", ".left-img--2"], {
    scrollTrigger: {
      trigger: ".left-img--1",
      scroller: "body",
      start: "top 60%",
      smooth: 1,
      scrub: 1,
    },
    y: -350,
    duration: 3,
    ease: "power1.out",
  })
  .to(".left-img--2", {
    scrollTrigger: {
      trigger: ".left-img--1",
      scroller: "body",
      start: "top 60%",
      smooth: 1,
      scrub: 1,
    },
    height: 600,
    duration: 2.5,
    delay: 1,
    ease: "power1.easeOut",
  })
  .to(".layout-3", {
    scrollTrigger: {
      trigger: ".layout-3",
      scroller: "body",
      start: "top 20%",
      end: "bottom 20%",
      scrub: 1.5,
    },
    borderRadius: 0,
  });

const urban = document.querySelector(".urban-img");
const interior = document.querySelector(".interior-img");
const arc = document.querySelector(".arc-img");
const land = document.querySelector(".land-img");
const retail = document.querySelector(".retail-img");
const arts = document.querySelector(".arts-img");
const graphics = document.querySelector(".graphics-img");
const object = document.querySelector(".object-img");

gsap.to([urban, interior, arc, land, retail, arts, graphics, object], {
  scrollTrigger: {
    trigger: ".what",
    scroller: "body",
    start: "top 28%",
    end: "bottom 40%",
  },
  keyframes: [
    {
      top: "150%",
      opacity: 0.5,
      visibility: "visible",
      opacity: 0,
      ease: "power1.out",
      stagger: 1,
      duration: 2,
    },
  ],
});
