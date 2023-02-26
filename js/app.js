gsap.registerPlugin({ ScrollSmoother, ScrollTrigger });

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 1.5,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1, y: 0 },
    {
      opacity: 0,
      y: -100,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );

  let itemL = gsap.utils.toArray(".gallery__left .gallery__item");

  itemL.forEach((item) => {
    gsap.fromTo(item, {opacity: 0, x: -70}, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: item,
			scrub: true
		}
	});
  });

  let itemR = gsap.utils.toArray(".gallery__right .gallery__item");

  itemR.forEach((item) => {
    gsap.fromTo(item, {opacity: 0, x: 70}, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: item,
			scrub: true
		}
	});
  });
}
