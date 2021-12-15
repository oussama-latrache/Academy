// arrow up
let up = document.querySelector('.arrow-up')

window.onscroll = function(){
    if(window.scrollY >= 800){
        up.style.cssText = 'display:block;'
    }else{
        up.style.cssText = 'display:none;'
    }
}
up.onclick = function(){
    window.scrollTo({
        left:0,
        top:0,
        behavior:'smooth'
    })
}