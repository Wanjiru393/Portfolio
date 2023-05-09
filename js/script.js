navbar = document.querySelector(".navbar").querySelectorAll("a");

navbar.forEach(element => {
    element.addEventListener("click", function(){
        navbar.forEach(nav => nav.classList.remove("active"))

        this.classList.add("active");
    })
});

var typed = new Typed(".typing",{
    strings:["","Software Developer","Web Designer","Back-end Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

