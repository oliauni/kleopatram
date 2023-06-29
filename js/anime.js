let scroll = 0;
window.onscroll = onScroll;
const img=document.querySelector('.img')
function onScroll() {
    let top = window.pageYOffset;
    if (scroll > top) {
        console.log('1');
    } else if (scroll < top) {
        console.log('0');
        if(window.pageYOffset>=220){
     img.className='aimg'
        }

    }
    scroll = top;
console.log(window.pageYOffset)
}