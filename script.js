function loadanimate(){
    gsap.from("#page1 h1", {
      y: 50,
      opacity: 0,
      delay: 0.4,
      duration: 0.5,
      stagger: 0.2,
    });
    gsap.from("#page1 #img-cont", {
      y: 100,
      opacity: 0,
      delay: 1,
      duration: 0.5,
    });
}

loadanimate()