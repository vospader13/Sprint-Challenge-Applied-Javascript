// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const dspan = document.createElement('span');
var today = new Date();
console.log(today)
formatDate();

function formatDate() {
  var date = today.toJSON().slice(0, 10);
  var nDate = date.slice(5, 7) + '/' +
    date.slice(8, 10) + '/' +
    date.slice(0, 4);
  dspan.classList.add('date');
  dspan.textContent = nDate;
}
const header = () => {
  const hdiv = document.createElement('div');
  hdiv.classList.add('header');
  hdiv.appendChild(dspan);
  const h1 = document.createElement('h1');
  h1.textContent = `Lambda Times`;
  hdiv.appendChild(h1);
  const tspan = document.createElement('span');
  tspan.classList.add('temp');
  tspan.textContent = `Temperature: 98°`;
  hdiv.appendChild(tspan);
  return hdiv;
}
const container = document.querySelector('.header-container');
const hcomp = header();
container.appendChild(hcomp);
