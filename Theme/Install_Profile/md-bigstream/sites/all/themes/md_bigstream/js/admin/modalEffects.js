var ModalEffects=function(){function e(){var e=document.querySelector(".cl-overlay");[].slice.call(document.querySelectorAll(".cl-trigger")).forEach(function(c){function t(e){classie.remove(n,"cl-show"),e&&classie.remove(document.documentElement,"cl-perspective")}function l(){t(classie.has(c,"cl-setperspective"))}var n=document.querySelector("#"+c.getAttribute("data-modal")),o=n.querySelector(".cl-close");c.addEventListener("click",function(){classie.add(n,"cl-show"),e.removeEventListener("click",l),e.addEventListener("click",l),classie.has(c,"cl-setperspective")&&setTimeout(function(){classie.add(document.documentElement,"cl-perspective")},25)}),o.addEventListener("click",function(e){e.stopPropagation(),l()})})}e()}();