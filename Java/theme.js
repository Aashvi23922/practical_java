var change = document.querySelector(".fa-bars");
        change.addEventListener("click", function(){
            document.body.classList.toggle("dark")
            if(document.body.classList.contains("dark") == true){
                change.classList.remove("fa-bars")
                change.classList.add("fa-close")
            }else{
                change.classList.remove("fa-close")
                change.classList.add("fa-bars")
            }
        })


function menu_dis(){
 let dash = document.querySelector(".header"); 
 let random = window.scrollY;
 
 if(random > 0){
    dash.classList.add("bg_img");
    }else{
    dash.classList.remove("bg_img");
    }   
    }
 window.addEventListener("scroll",menu_dis); 