// hide menu bar in mobile
let navbar=document.querySelectorAll('.nav-link');
let navcolapse=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(e){
    e.addEventListener('click', function(){
        navcolapse.classList.remove('show');
    })
})
