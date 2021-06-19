// !function(){
//     var $winPopup = document.querySelector('.win-popup');
//     var $wheel = document.querySelector('.landing-17__wheel-wrap--img');
//     var $wheelBtn = document.querySelector('.landing-17__wheel-wrap--btn');

//     $wheelBtn.addEventListener('click', function(e) {
//         $wheel.classList.add('active');
//         setTimeout(function() {
//             $winPopup.classList.add('active');
//         }, 3500);
//     });
// }();

const popup = document.querySelector(".popup")
const wheel = document.querySelector(".wheel")
const wheelBtn = document.querySelector(".wheel__btn_wrap")

wheelBtn.addEventListener("click", () => {
  wheel.classList.add("active")
  setTimeout(() => {
    popup.classList.add("active")
  }, 3500)
})
