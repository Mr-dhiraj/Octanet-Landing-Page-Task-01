document.addEventListener('DOMContentLoaded', ()=>{
    let SignUP = document.getElementById('signup')
    let scrollSignUP = document.querySelector('.sign-up')
    let scrollAbout = document.getElementById('about')
    let AboutUs = document.querySelector('.about-us')

    SignUP.addEventListener('click',()=>{
        scrollSignUP.scrollIntoView({behavior: 'smooth'})
    })
    scrollAbout.addEventListener('click',()=>{
        AboutUs.scrollIntoView({behavior: 'smooth'})
    })
})