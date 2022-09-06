let progressBarHtml = document.querySelector(".circular-progress-html");
let valueContainerHtml = document.querySelector(".value-container-html");

let progressValueHtml = 0;
let progressEndValueHtml = 60;
let speedHtml = 50;

let progressHtml = setInterval(() => {
  progressValueHtml++;
  valueContainerHtml.textContent = `${progressValueHtml}%`;
  progressBarHtml.style.background = `conic-gradient(
      #e34c26 ${progressValueHtml * 3.6}deg,
      #FAFDF3 ${progressValueHtml * 3.6}deg
  )`;
  if (progressValueHtml == progressEndValueHtml) {
    clearInterval(progressHtml);
  }
}, speedHtml);

let progressBarCss = document.querySelector(".circular-progress-css");
let valueContainerCss = document.querySelector(".value-container-css");

let progressValueCss = 0;
let progressEndValueCss = 50;
let speedCss = 50;

let progressCss = setInterval(() => {
  progressValueCss++;
  valueContainerCss.textContent = `${progressValueCss}%`;
  progressBarCss.style.background = `conic-gradient(
      #2965f1 ${progressValueCss * 3.6}deg,
      #FAFDF3 ${progressValueCss * 3.6}deg
  )`;
  if (progressValueCss == progressEndValueCss) {
    clearInterval(progressCss);
  }
}, speedCss);

let progressBarJs = document.querySelector(".circular-progress-js");
let valueContainerJs = document.querySelector(".value-container-js");

let progressValueJs = 0;
let progressEndValueJs = 30;
let speedJs = 50;

let progressJs = setInterval(() => {
  progressValueJs++;
  valueContainerJs.textContent = `${progressValueJs}%`;
  progressBarJs.style.background = `conic-gradient(
      #f0db4f ${progressValueJs * 3.6}deg,
      #FAFDF3 ${progressValueJs * 3.6}deg
  )`;
  if (progressValueJs == progressEndValueJs) {
    clearInterval(progressJs);
  }
}, speedJs);

let progressBarPy = document.querySelector(".circular-progress-py");
let valueContainerPy = document.querySelector(".value-container-py");

let progressValuePy = 0;
let progressEndValuePy = 40;
let speedPy = 50;

let progressPy = setInterval(() => {
  progressValuePy++;
  valueContainerPy.textContent = `${progressValuePy}%`;
  progressBarPy.style.background = `conic-gradient(
      #ffd43b ${progressValuePy * 3.6}deg,
      #FAFDF3 ${progressValuePy * 3.6}deg
  )`;
  if (progressValuePy == progressEndValuePy) {
    clearInterval(progressPy);
  }
}, speedPy);

let progressBarLg = document.querySelector(".circular-progress-lg");
let valueContainerLg = document.querySelector(".value-container-lg");

let progressValueLg = 0;
let progressEndValueLg = 80;
let speedLg = 50;

let progressLg = setInterval(() => {
  progressValueLg++;
  valueContainerLg.textContent = `${progressValueLg}%`;
  progressBarLg.style.background = `conic-gradient(
      #ff2c2c ${progressValueLg * 3.6}deg,
      #FAFDF3 ${progressValueLg * 3.6}deg
  )`;
  if (progressValueLg == progressEndValueLg) {
    clearInterval(progressLg);
  }
}, speedLg);

let progressBarBg = document.querySelector(".circular-progress-bg");
let valueContainerBg = document.querySelector(".value-container-bg");

let progressValueBg = 0;
let progressEndValueBg = 50;
let speedBg = 50;

let progressBg = setInterval(() => {
  progressValueBg++;
  valueContainerBg.textContent = `${progressValueBg}%`;
  progressBarBg.style.background = `conic-gradient(
      #ff5f00 ${progressValueBg * 3.6}deg,
      #FAFDF3 ${progressValueBg * 3.6}deg
  )`;
  if (progressValueBg == progressEndValueBg) {
    clearInterval(progressBg);
  }
}, speedBg);

let progressBarKey = document.querySelector(".circular-progress-key");
let valueContainerKey = document.querySelector(".value-container-key");

let progressValueKey = 0;
let progressEndValueKey = 40;
let speedKey = 50;

let progressKey = setInterval(() => {
  progressValueKey++;
  valueContainerKey.textContent = `${progressValueKey}%`;
  progressBarKey.style.background = `conic-gradient(
      #141414 ${progressValueKey * 3.6}deg,
      #FAFDF3 ${progressValueKey * 3.6}deg
  )`;
  if (progressValueKey == progressEndValueKey) {
    clearInterval(progressKey);
  }
}, speedKey);

let progressBarVio = document.querySelector(".circular-progress-vio");
let valueContainerVio = document.querySelector(".value-container-vio");

let progressValueVio = 0;
let progressEndValueVio = 25;
let speedVio = 50;

let progressVio = setInterval(() => {
  progressValueVio++;
  valueContainerVio.textContent = `${progressValueVio}%`;
  progressBarVio.style.background = `conic-gradient(
      #371110 ${progressValueVio * 3.6}deg,
      #FAFDF3 ${progressValueVio * 3.6}deg
  )`;
  if (progressValueVio == progressEndValueVio) {
    clearInterval(progressVio);
  }
}, speedVio);

let progressBarDraw = document.querySelector(".circular-progress-art");
let valueContainerDraw = document.querySelector(".value-container-art");

let progressValueDraw = 0;
let progressEndValueDraw = 50;
let speedDraw = 50;

let progressDraw = setInterval(() => {
  progressValueDraw++;
  valueContainerDraw.textContent = `${progressValueDraw}%`;
  progressBarDraw.style.background = `conic-gradient(
      #464646 ${progressValueDraw * 3.6}deg,
      #FAFDF3 ${progressValueDraw * 3.6}deg
  )`;
  if (progressValueDraw == progressEndValueDraw) {
    clearInterval(progressDraw);
  }
}, speedDraw);

// Dynamic Year

const dynamicYear = document.querySelector(".year");

dynamicYear.innerHTML = new Date().getFullYear();

// ******* Toggle Nav Bar *******

const toggleBar = document.querySelector('.hamburger-toggle');
const toggleLinks = document.querySelector(".toggle-links");
const linksContainer = document.querySelector('.links-container');

toggleBar.addEventListener('click', () =>{
  //if (toggleLinks.classList.contains("show-toggle-links")){
  //    toggleLinks.classList.remove('show-toggle-links')
  // } else {
  //toggleLinks.classList.add("show-toggle-links");
  // }
  //toggleLinks.classList.toggle("show-toggle-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = toggleLinks.getBoundingClientRect().height;
  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
  }
  else{
    linksContainer.style.height = 0;
  }
});


// ***** Top Link *****
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > 1350){
    topLink.classList.add('show-link');
  }
  else {
    topLink.classList.remove('show-link')
  }
})


