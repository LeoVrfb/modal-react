(this["webpackJsonpreact-modal-v1"]=this["webpackJsonpreact-modal-v1"]||[]).push([[0],{50:function(n,e,t){n.exports=t(60)},59:function(n,e,t){n.exports=t.p+"static/media/modal.fabccdc4.jpg"},60:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),o=t(28),c=t.n(o),i=t(16),u=t(14),l=t(15),d=t(34),s=t(46);function f(){var n=Object(u.a)(["\n  cursor: pointer;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 32px;\n  height: 32px;\n  padding: 0;\n  z-index: 10;\n"]);return f=function(){return n},n}function m(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.8;\n  color: #141414;\n\n  p {\n    margin-bottom: 1rem;\n  }\n\n  button {\n    padding: 10px 24px;\n    background: #141414;\n    color: #fff;\n    border: none;\n  }\n"]);return m=function(){return n},n}function b(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 10px 0 0 10px;\n  background: #000;\n"]);return b=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: 800px;\n  height: 500px;\n  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  color: #000;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  position: relative;\n  z-index: 10;\n  border-radius: 10px;\n"]);return p=function(){return n},n}function g(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return g=function(){return n},n}var h=l.b.div(g()),v=l.b.div(p()),x=l.b.img(b()),w=l.b.div(m()),E=Object(l.b)(s.a)(f()),j=function(n){var e=n.showModal,o=n.setShowModal,c=Object(r.useRef)(),i=Object(d.useSpring)({config:{duration:250},opacity:e?1:0,transform:e?"translateY(0%)":"translateY(-100%)"}),u=Object(r.useCallback)((function(n){"Escape"===n.key&&e&&(o(!1),console.log("I pressed"))}),[o,e]);return Object(r.useEffect)((function(){return document.addEventListener("keydown",u),function(){return document.removeEventListener("keydown",u)}}),[u]),a.a.createElement(a.a.Fragment,null,e?a.a.createElement(h,{onClick:function(n){c.current===n.target&&o(!1)},ref:c},a.a.createElement(d.animated.div,{style:i},a.a.createElement(v,{showModal:e},a.a.createElement(x,{src:t(59),alt:"camera"}),a.a.createElement(w,null,a.a.createElement("h1",null,"Are you ready?"),a.a.createElement("p",null,"Get exclusive access to our next launch."),a.a.createElement("button",null,"Join Now")),a.a.createElement(E,{"aria-label":"Close modal",onClick:function(){return o((function(n){return!n}))}})))):null)};function y(){var n=Object(u.a)(["\n  * {\n    box-sizing: border-box;\n    margin:0;\n    padding: 0;\n    font-family: 'Arial', sans-serif;\n  }\n"]);return y=function(){return n},n}var k=Object(l.a)(y());function O(){var n=Object(u.a)(["\n  min-width: 100px;\n  padding: 16px 32px;\n  border-radius: 4px;\n  border: none;\n  background: #141414;\n  color: #fff;\n  font-size: 24px;\n  cursor: pointer;\n"]);return O=function(){return n},n}function M(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]);return M=function(){return n},n}var C=l.b.div(M()),S=l.b.button(O());var z=function(){var n=Object(r.useState)(!1),e=Object(i.a)(n,2),t=e[0],o=e[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,null,a.a.createElement(S,{onClick:function(){o((function(n){return!n}))}},"I'm a modal"),a.a.createElement(j,{showModal:t,setShowModal:o}),a.a.createElement(k,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.cadb634f.chunk.js.map