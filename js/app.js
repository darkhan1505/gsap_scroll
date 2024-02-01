gsap.registerPlugin({ ScrollSmoother, ScrollTrigger });

  ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 3,
    effects: true,
  });

  gsap.fromTo(
    ".hero-section",
    { opacity: 1, y: -100 },
    {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "center",
        end: "820",
        scrub: true,
      },
    }
  );
  gsap.fromTo(
    ".zhospar",
    {opacity: 1, y:0},
    {
      opacity: 0,
      y: -30,
      scrollTrigger: {
        trigger: ".zhospar",
        start: 'center',
        end: '820',
        scrub: true,
      }
    }
  )

  let zhosparR = gsap.utils.toArray(".zhospar-right .zhospar-item");
  let zhosparL = gsap.utils.toArray(".zhospar-left .zhospar-item");
  
  zhosparL.forEach((item) => {
    gsap.fromTo(item, {opacity: 0, x: -100}, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: item,
			scrub: true
		}
	});
  });
  zhosparR.forEach((item) => {
    gsap.fromTo(item, {opacity: 0, x:-300}, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: item,
			scrub: true
		}
	});
  });

  let itemL = gsap.utils.toArray(".zhospar-left .gallery__item");

  itemL.forEach((item) => {
    gsap.fromTo(item, {opacity: 0, x: -120}, {
		x: 0,
		opacity: 1,
		scrollTrigger: {
			trigger: item,
			scrub: true
		}
	});
  });

  let itemR = gsap.utils.toArray(".zhospar-right .gallery__item");

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

