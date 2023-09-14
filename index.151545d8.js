const e=document.querySelector(".list");document.querySelectorAll(".list-item"),document.querySelector(".list-hidden");let t=0,n=0;const r=e=>{let t=e.target.getBoundingClientRect(),n={x:e.pageX-t.left,y:e.pageY-t.top};return n},a=e=>{let t=e.getBoundingClientRect();return(t.bottom-t.top)/2};function i(e){[].slice.call(e.children).forEach(function(e,r){e.draggable=!0;let a="B\xe0i";e.classList.contains("active")?(a="Module",n++):t++,e.children.length?e.innerHTML=`${a}: ${"Module"===a?n:t}: <span>${e.children[0].innerText}</span>`:e.innerHTML=`${a}: ${"Module"===a?n:t}: <span>${e.innerText}</span>`})}!// Using
function(e,t){var n;// Function responsible for sorting
function o(t){t.preventDefault(),t.dataTransfer.dropEffect="move";var i=t.target;if(i&&i!==n&&"DIV"==i.nodeName){// Sorting
let o=r(t),l=a(t.target);o.y>l?i.nextSibling.parentElement===e&&e.insertBefore(n,i.nextSibling):i.parentElement===e&&e.insertBefore(n,i)}}// End of sorting
function l(r){r.preventDefault(),n.classList.remove("ghost"),e.removeEventListener("dragover",o,!1),e.removeEventListener("dragend",l,!1),// Notification about the end of sorting
t(n)}// Making all siblings movable
i(e),// Sorting starts
e.addEventListener("dragstart",function(t){n=t.target,// Limiting the movement type
t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("Text",n.textContent),// Subscribing to the events at dnd
e.addEventListener("dragover",o,!1),e.addEventListener("dragend",l,!1),setTimeout(function(){// If this action is performed without setTimeout, then
// the moved object will be of this class.
n.classList.add("ghost")},0)},!1)}(e,function(r){t=0,n=0,i(e)});//# sourceMappingURL=index.151545d8.js.map

//# sourceMappingURL=index.151545d8.js.map
