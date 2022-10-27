console.log('Live @ HOME!')
const header = document.querySelector('.nav-bar')

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if (scroll_position > 180){
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.315);';
        header.style.opacity = '.5'
    } else {
        header.style.backgroundColor = 'white';
        header.style.opacity = '1'
        
    }
})