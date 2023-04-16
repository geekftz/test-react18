import { useEffect, useCallback, useMemo, useState, lazy } from "react";

import "./App.css";

function App() {
  // useEffect(() => {
  //   if ("IntersectionObserver" in window) {
  //     const lazyloadImages = document.querySelectorAll(".lazy");

  //     var imageObserver = new IntersectionObserver(function (
  //       entries,
  //       observer
  //     ) {
  //       console.log("🚀 --> entries:", entries);

  //       entries.forEach(function (entry) {
  //         // console.log("🚀 --> entry:", entry);
  //         if (entry.isIntersecting) {
  //           var image = entry.target;
  //           // console.log("🚀 --> image:", image);
  //           debugger;
  //           image.src = image.dataset.src;
  //           image.classList.remove("lazy");
  //           imageObserver.unobserve(image);
  //         }
  //       });
  //     });

  //     lazyloadImages.forEach(function (image) {
  //       imageObserver.observe(image);
  //     });
  //   }

  //   setTimeout(() => {
  //     console.log(document.body.scrollTop);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    const imgs = document.querySelectorAll(".lazy");

    function lazyload() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const winHeight = window.innerHeight;
      console.log("🚀 --> lazyload --> scrollTop:", scrollTop);
      console.log("🚀 --> lazyload --> winHeight:", winHeight);

      for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];

        if (img.getAttribute("src")) {
          continue;
        }

        if (img.offsetTop < scrollTop + winHeight) {
          console.log("🚀 --> lazyload --> img:", img);
          img.src = img.getAttribute("data-src");
        }
      }
    }

    window.onscroll = lazyload;

    lazyload();
  }, []);

  return (
    <div className="App">
      <img
        className="lazy"
        data-src="https://pic1.zhimg.com/v2-cdd39f45bd5f7b525862ae7572e50c83_r.jpg?source=1940ef5c"
        alt=""
      />
      <img
        className="lazy"
        data-src="https://pic4.zhimg.com/v2-2b7a8469a00f7fa5d0b362659b17547c_r.jpg"
        alt=""
      />
      <img
        className="lazy"
        data-src="https://pic1.zhimg.com/v2-70e686bea7cd1ef9a050cd10b5a61810_r.jpg?source=1940ef5c"
        alt=""
      />
      <img
        className="lazy"
        data-src="https://pic4.zhimg.com/v2-ca861dcdd2208aa8e9582e3f5a5bd98e_r.jpg?source=1940ef5c"
        alt=""
      />
    </div>
  );
}

export default App;
