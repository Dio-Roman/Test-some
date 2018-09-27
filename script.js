// добавляет template
const main = document.querySelector('main');
const temp = document.querySelector('#temp1');
const item = temp.content.querySelector('div');

function createClone() {
  return document.importNode(item, true);
}

let pxStep = 1;
document.body.addEventListener('scroll', () => {
  if (document.body.scrollTop == 200 * pxStep) {
    main.appendChild(createClone());
    pxStep++;
  }
})

// плавный переход по якорю
const link = document.querySelector('a');
link.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector('#web').scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})