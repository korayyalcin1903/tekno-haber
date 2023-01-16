let kadi = document.querySelector(".kadi");
let password = document.querySelector(".password");
let submit = document.querySelector(".submit");
let dogrulama = document.querySelector(".dogrulama");


let html = document.querySelector("html");
let theme = document.querySelector(".theme");
let bs_theme = document.querySelector(".bs-theme");

let next = document.querySelector(".carousel-control-next");

let head = document.querySelector("head");

let icon = `<link rel="shortcut icon" href="images/tekno-icon.png" type="image/x-icon">`;
let icon2 = `<link rel="shortcut icon" href="../../images/tekno-icon.png" type="image/x-icon">`;
head.insertAdjacentHTML("beforeend", icon);
head.insertAdjacentHTML("beforeend", icon2);

let success = `<p class="text-success">Başarılı Giriş</p>`
let error = `<p class="text-danger">Hatalı Giriş</p>`

if(submit){
    submit.addEventListener("click", function(){
        if(kadi.value == "ead" && password.value == "ead1"){
            dogrulama.innerHTML = "";
            dogrulama.insertAdjacentHTML("beforeend",success);
            console.log("başarılı")
            setTimeout(yonlendir,1000);
            function yonlendir() {
                window.location.href = "index.html";
            }
        }
        else{
            dogrulama.innerHTML = "";
            dogrulama.insertAdjacentHTML("beforeend",error);
            console.log("başarısız");
        }
    });
}
if(next){
    setInterval(function(){
      next.click();
    }, 3000);
}

if(html.dataset.bsTheme == "light"){
    bs_theme.innerHTML = "";
    let logo = `<i class="fa-solid fa-sun text-light fa-2x"></i>`;
    bs_theme.insertAdjacentHTML("beforeend",logo);
}
else{
    bs_theme.innerHTML = "";
    let logo = `<i class="fa-solid fa-moon text-light fa-2x"></i>`;
    bs_theme.insertAdjacentHTML("beforeend",logo);
}

bs_theme.addEventListener("click", function(){
    if(html.dataset.bsTheme == "light"){
        html.dataset.bsTheme = "dark";
        bs_theme.innerHTML = "";
        let logo = `<i class="fa-solid fa-moon text-light fa-2x"></i>`;
        bs_theme.insertAdjacentHTML("beforeend",logo);
    }
    else{
        html.dataset.bsTheme = "light";
        bs_theme.innerHTML = "";
        html.dataset.bsTheme = "light";
        let logo = `<i class="fa-solid fa-sun text-light fa-2x"></i>`;
        bs_theme.insertAdjacentHTML("beforeend",logo);
    }
});





    
    
