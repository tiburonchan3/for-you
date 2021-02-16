const el = document.querySelector('.todo')
const text = document.querySelector('.heart-text')
function openOrClose(){
    if(el.classList.contains('show')){
        el.classList.remove('show')
        text.classList.remove('show-text')
    }else{
        el.classList.add('show')
        text.classList.add('show-text')
    }
}