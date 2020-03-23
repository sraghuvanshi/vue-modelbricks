document.addEventListener("DOMContentLoaded", () => {
  const scrollslider = document.getElementById("scrollslider"),
    overlays = document.getElementById("scrolloverlays"),
    alwaysSticky = document.querySelectorAll(".is-alwayssticky"),
    desktopSticky = document.querySelectorAll(".is-desktopsticky");
  let viewportHeight = window.innerHeight;

  const positionStickySupport = () => {
    let el = document.createElement("a"),
      mStyle = el.style;
    mStyle.cssText =
      "position:sticky;position:-webkit-sticky;position:-ms-sticky;";
    return mStyle.position.indexOf("sticky") !== -1;
  };

  if (!positionStickySupport()) {
    // sticky polyfill for IE for always sticky elements
    Stickyfill.add(alwaysSticky);
    if (window.innerWidth >= 768) {
      Stickyfill.add(desktopSticky);
    }
  }

  const skrollrStart = () => {
    let elH = scrollslider.offsetHeight;
    let winW = window.innerWidth;
    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      scrollslider.classList.remove("no-skrollr");
      skrollr.init({
        forcedHeight: false,
        constants: {
          distance: elH / 4,
          distance2: elH / 2,
          distance3: (elH / 4) * 3
        }
      });
    }
  };
  // these are relative to the viewport, i.e. the window
  const mobileScrolling = () => {
    let elOffset = overlays.getBoundingClientRect();
    let top = Math.ceil(elOffset.top / 5) * 5;
    let halfOfViewport = Math.ceil(Math.floor(viewportHeight / 2) / 5) * 5;
    console.log(top, -viewportHeight, -halfOfViewport);
    if (top > 0) {
      scrollslider.setAttribute("data-current", 1);
    } else if (top <= 0 && top >= -viewportHeight) {
      scrollslider.setAttribute("data-current", 2);
    } else if (top <= -viewportHeight && top >= -(viewportHeight * 2)) {
      scrollslider.setAttribute("data-current", 3);
    } else {
      scrollslider.setAttribute("data-current", 4);
    }
  };

  // Fire initially
  window.addEventListener("load", () => {
    skrollrStart();
  });

  // Fire on resize
  window.addEventListener("resize", () => {
    viewportHeight = window.innerHeight;
    skrollrStart();
  });

  window.addEventListener("scroll", () => {
    mobileScrolling();
  });
});

// export default {
//   positionStickySupport,
//   skrollrStart,
//   mobileScrolling
// };
