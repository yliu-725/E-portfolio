// template id template_0lug9gd
// service id service_xgpogz8
let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
   contrastToggle = !contrastToggle;
   if (contrastToggle) {
    document.body.classList += " dark-theme"
   }
   else {
    document.body.classList.remove("dark-theme")
   }
}

function contact() {
    console.log(work)
}


function toggleModal() {
    document.body.classList += " modal--open"
}
