export function smoothScroll(target) {
  if (target) {
    const targetScroll = document.getElementById(target);
    scrollTo(document.documentElement, targetScroll.offsetTop, 900);
  }
}

function scrollTo(element, to, duration) {
  const start = element.scrollTop;
  const change = to - start + document.getElementById("main-panel").offsetTop;
  let currentTime = 0;
  const increment = 20;

  var animateScroll = function() {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
}

function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
}

export function scrollObject(windowsScrollTop, classes) {
  // console.log("windowsScrollTop: ", windowsScrollTop);
}

// useEffect(() => {
// // componentDidMount() {
//   var href = window.location.href.substring(
//     window.location.href.lastIndexOf("#/") + 2
//   );
//   var hrefId = href.substring(href.lastIndexOf("#") + 1);
//   if (href.lastIndexOf("#") > 0)
//     document.getElementById(hrefId).scrollIntoView();
//   window.addEventListener("scroll", updateView);
//   updateView();
// // }
// // componentDidUpdate() {
//   var href = window.location.href.substring(
//     window.location.href.lastIndexOf("#") + 1
//   );
//   document.getElementById(href).scrollIntoView();
// // }
// // componentWillUnmount() {
//   window.removeEventListener("scroll", updateView);
// // }
// });

// function updateView() {
//   var contentSections = document.getElementsByClassName("cd-section");
//   var navigationItems = document
//     .getElementById("cd-vertical-nav")
//     .getElementsByTagName("a");

//   for (let i = 0; i < contentSections.length; i++) {
//     var activeSection =
//       parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
//     if (
//       contentSections[i].offsetTop -
//       window.innerHeight / 2 +
//       document.getElementById("main-panel").offsetTop <
//       window.pageYOffset &&
//       contentSections[i].offsetTop +
//       contentSections[i].scrollHeight -
//       window.innerHeight / 2 +
//       document.getElementById("main-panel").offsetTop >
//       window.pageYOffset
//     ) {
//       navigationItems[activeSection].classList.add("is-selected");
//     } else {
//       navigationItems[activeSection].classList.remove("is-selected");
//     }
//   }
// }

// OLD FUNCTION

// setTimeout(() => {
//   if (elementId) {
//     const element = document.getElementById(elementId);
//     if (elementId !== "presentation") {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     else {
//       const elementPos = element.getBoundingClientRect().top - 90 + window.scrollY;
//       window.scrollTo({
//         top: elementPos,
//         behavior: "smooth"
//       });
//     }
//   }
// }, 600);
