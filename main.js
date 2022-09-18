const tl = gsap.timeline({ paused: true });

tl.to(".menu-container", {
  height: "100vh",
})
  .to(".menu-container .logo", {
    opacity: 1,
    x: 0,
  })
  .to(
    ".menu-container .close-icon svg",
    {
      opacity: 1,
      x: 0,
    },
    "-=.5"
  )
  .to(
    ".menu-container a",
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: Power2.easeOut,
      stagger: 0.2,
    },
    "-=.4"
  );

const menuIcon = document.querySelector(".menu-icon-container .menu-icon");
const closeIcon = document.querySelector(".menu-container .close-icon");

menuIcon.addEventListener("click", () => {
  tl.timeScale(1).restart();
});

closeIcon.addEventListener("click", () => {
  tl.timeScale(4).reverse();
});
