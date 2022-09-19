const slideSections = document.querySelectorAll(".slide__container");
console.log(slideSections);

const prevBtn = document.querySelector(".btn__controls--left");
const nextBtn = document.querySelector(".btn__controls--right");
const mediaQuery = window.matchMedia("(min-width: 850px)");
const mediaQueryDes = window.matchMedia("(max-width: 1440px)");
const mediaQuery1 = window.matchMedia("(min-width: 375px)");
const mediaQueryMob = window.matchMedia("(max-width: 849px)");
const barEl = document.querySelectorAll(".hamburger");
console.log(barEl);

const navList = document.querySelector(".nav__list");
const logo = document.querySelector(".logo");
const headerEl = document.querySelector("header");
console.log(navList, logo, headerEl);

const showNav = (n)=>{
  for (let i = 0; i < barEl.length; i++) {
    barEl[i].style.display ="none";   
  }
    barEl[n].style.display = "inline";
}
const openNav = ()=>{
  logo.style.display = "none";
  navList.style.display = "flex";
  headerEl.style.width = "100%";
  headerEl.style.backgroundColor = "white";
  showNav(1);

}
const closeNav = ()=>{
  logo.style.display = "inline";
  navList.style.display = "none";
  headerEl.style.width = "100%";
  headerEl.style.backgroundColor = "transparent";
  showNav(0);
}
barEl[0].addEventListener("click", openNav);
barEl[1].addEventListener("click", closeNav);


/*const navigate = ()=>{
  menuBar.classList.toggle("activeMob");
  closeBar.classList.toggle("activeMob");
  navList.classList.toggle("activeMob");
}

menuBar.addEventListener("click",navigate)*/

let slideIndex = 0;

const moveSlide = (slideIndex)=>{
  for (let i = 0; i < slideSections.length; i++) {
    //slideIndex = i;
    slideSections[i].style.display = "none";
  }
  if(mediaQuery.matches && mediaQueryDes.matches){
    slideSections[slideIndex].style.display = "grid";
  }
  if(mediaQuery1.matches && mediaQueryMob.matches){
    slideSections[slideIndex].style.display = "block";
  }
  return slideIndex;
}

const nextSlide = ()=>{
   slideIndex >= slideSections.length - 1 ? slideIndex=0 : slideIndex++;
  moveSlide(slideIndex);
}
const prevSlide = ()=>{
  slideIndex <= 0 ? slideIndex = slideSections.length - 1 : slideIndex--;
  moveSlide(slideIndex);
}
  prevBtn.addEventListener("click", prevSlide );

  nextBtn.addEventListener("click", nextSlide);

