document.addEventListener("DOMContentLoaded", function () {
  function toggleView() {
    let isMobile = window.innerWidth <= 768;
    document.querySelector(".display-on-pc-home").style.display = isMobile
      ? "none"
      : "flex";
    document.querySelector(".display-on-phone-home").style.display = isMobile
      ? "block"
      : "none";
  }
  window.addEventListener("resize", toggleView);
  toggleView();

  let navItems = document.querySelectorAll(".nav-a");
  let contentItems = document.querySelectorAll(".content");
  if (navItems.length > 0) {
    navItems[0].classList.add("active");
  }

  navItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      document.querySelector(".active")?.classList.remove("active");
      document.querySelector(".visible")?.classList.remove("visible");
      this.classList.add("active");
      contentItems[index].classList.add("visible");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".rll-youtube-player").forEach(function (el) {
      let button = el.querySelector(".play");
      if (button) {
          button.addEventListener("click", function () {
              let videoSrc = el.getAttribute("data-src") + "?autoplay=1";
              let iframe = document.createElement("iframe");
              iframe.setAttribute("src", videoSrc);
              iframe.setAttribute("allowfullscreen", "true");
              iframe.setAttribute("width", "560");
              iframe.setAttribute("height", "315");
              el.innerHTML = "";
              el.appendChild(iframe);
          });
      }
  });
});
