
function startScroll() {

const elemento = document.querySelectorAll('.js-menu a[href^="#"]');


function callback(event)  {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  section.scrollIntoView ({
    block: 'start',
    behavior: 'smooth',
  });
}


elemento.forEach((item) => {
  item.addEventListener('click', callback)
})
}
startScroll();

function novaAcor() {
const accordionList = document.querySelector('.js-accordion');
const accordion2 = accordionList.querySelectorAll('h3')

if(accordion2.length) {

accordion2[0].addEventListener('click', activeAccordion)


function activeAccordion() {
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo')

}
}
}
novaAcor();

const sections = document.querySelectorAll('.js-section');
 
function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = (sectionTop - window.innerHeight) * 0.6 < 0;
    if(sectionVisible) {
      section.classList.add('ativo')
    } else {
       section.classList.remove('ativo')
    }
  })
}

window.addEventListener('scroll', animaScroll)







