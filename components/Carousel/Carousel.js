/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
let cc = document.createElement('div');
cc.classList.add('carousel');
let c = document.querySelector('.carousel-container');
c.appendChild(cc);
c.style.width = '100%';
c.style.height = '500px';
cc.style.zIndex = '3';
let img = document.createElement('img');

let previous,next,currentSlide;
window.onload = () =>{
let build = () => {

  let creator = (ele, attributes, ...children) => {
    const el = document.createElement(ele)

    for (key in attributes) {
      el.setAttribute(key, attributes[key])
    }

    children.forEach(child => {
      if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child))
      } else {
        el.appendChild(child)
      }
    })
    return el;

}

let carousel = creator('div',{class:'carousel'},previous = creator('div',{class:'left-button'},`<`),
next = creator('div',{class:'right-button'},`>`),creator('img',{class:'slide',src:'./assets/carousel/mountains.jpeg'}),
creator('img',{class:'slide',src:'./assets/carousel/computer.jpeg'}),creator('img',{class:'slide',src:'./assets/carousel/trees.jpeg'}),
creator('img',{class:'slide',src:'./assets/carousel/turntable.jpeg'}));
let slides = document.querySelectorAll('.slide');
console.log(slides)
// const slides = document.querySelectorAll('.slide');
cc.appendChild(carousel);
slides.forEach(function(s){
  s.style.zIndex = '5';

  carousel.appendChild(s)
})

function nextSlide(){
	goToSlide(currentSlide+1);
}


function previousSlide(){
	goToSlide(currentSlide-1);
}

function goToSlide(n){

	slides[currentSlide].className = 'slide';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slide';
}


next.onclick = function(){
	nextSlide();
};
previous.onclick = function(){

	previousSlide();
};
}

build()
}

