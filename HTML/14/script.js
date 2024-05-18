let index=0,
photos=document.querySelectorAll(".photo");
let buttons = document.querySelectorAll("div#button button");
function elem(selector){
    return document.querySelector(selector);
}



buttons.forEach(button=>{
    button.addEventListener("click",function(){
        // let button_index = this.dataset.index;
        // let button_index = this.getAttribute("data-index");
        let button_index = [...this.parentElement.children].indexOf(this);//???
        photos.forEach(photo=>{
            photo.classList.remove("show");
        });
        photos[button_index].classList.add("show");
        
        buttons.forEach(button=>{
            button.removeAttribute("style");
        });
        buttons[button_index].setAttribute("style","background-color:green");
    });
});

// elem("#o1").addEventListener("click", function(){
//     photos.forEach(photo=>{
//         photo.classList.remove("show");
//     });
//     photos[index=0].classList.add("show");
// });

// elem("#o2").addEventListener("click", function(){
//     photos.forEach(photo=>{
//         photo.classList.remove("show");
//     });
//     photos[index=1].classList.add("show");
// });

// elem("#o3").addEventListener("click", function(){
//     photos.forEach(photo=>{
//         photo.classList.remove("show");
//     });
//     photos[index=2].classList.add("show");
// });

// elem("#o4").addEventListener("click", function(){
//     photos.forEach(photo=>{
//         photo.classList.remove("show");
//     });
//     photos[index=3].classList.add("show");
// });

// elem("#o5").addEventListener("click", function(){
//     photos.forEach(photo=>{
//         photo.classList.remove("show");
//     });
//     photos[index=4].classList.add("show");
// });

elem("#prev").addEventListener("click",function(){
    photos.forEach(photo=>{
        photo.classList.remove("show");
    });
    if( index < 1){
        index=photos.length-1;
    }
    index--;
    photos[index].classList.add("show");
});

elem("#next").addEventListener("click",function next(){
    photos.forEach(photo=>{
        photo.classList.remove("show");
    });
    index++;
    if( index >= photos.length){
        index=0;
    }
    photos[index].classList.add("show");
});



