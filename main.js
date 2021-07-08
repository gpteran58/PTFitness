var modalBtn = document.querySelector('.modal-btn');
var modalBg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close')

modalBtn.addEventListener('click',function(){
    modalBg.classList.add('bg-active')
});
modalClose.addEventListener('click',function(){
   modalBg.classList.remove('bg-active')
})




document.getElementById('menu-trigger').addEventListener('click', sideMenuAppears);
document.getElementById('menu-close').addEventListener('click', sideMenuDisappears);


function sideMenuAppears() {
  // console.log('sideMenuAppears() is active'); - if you want to test the function, uncomment this
  document.getElementById('side-menu').classList.add('show-menu');
}

/* When you click menu close, it puts the hide-menu class onto #side-menu, reversing what just happened */
function sideMenuDisappears() {
  // console.log('sideMenuDisappears() is active'); - if you want to test the function, uncomment this
  document.getElementById('side-menu').classList.remove('show-menu');
}