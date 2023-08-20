function enableDarkMode() {
    let main_body = document.body;
    main_body.classList.toggle("dark-mode");
}

let menuToggle = document.querySelector('menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function(){
    header.classList.toggle('active');
}


