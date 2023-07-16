const svg1 = document.getElementById("#svg1");
    const svg2 = document.getElementById("#svg2");

    // Convert the SVG paths to Kute.js compatible objects
    const path1 = KUTE.fromTo(
      svg1.querySelectorAll("path"),
      { path: svg1.querySelectorAll("path")[0].getAttribute("d") },
      { path: svg2.querySelectorAll("path")[0].getAttribute("d") },
      { duration: 2000, easing: "easingCubicInOut" }
    );

    const path2 = KUTE.fromTo(
      svg1.querySelectorAll("path"),
      { path: svg1.querySelectorAll("path")[1].getAttribute("d") },
      { path: svg2.querySelectorAll("path")[1].getAttribute("d") },
      { duration: 2000, easing: "easingCubicInOut" }
    );

    const opacity1 = KUTE.fromTo(
      svg2,
      { opacity: 0 },
      { opacity: 1 },
      { duration: 2000, easing: "easingCubicInOut" }
    );

    // Chain the path morphing and opacity animations
    path1.chain(opacity1).start();
    path2.chain(opacity1).start();