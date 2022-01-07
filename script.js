

const section1 = document.querySelector('#section-1')
const section2 = document.querySelector('#section-2')
const section3 = document.querySelector('#section-3')
const footer = document.querySelector('#footer')

const introEl = document.querySelector('.intro')

const profile = document.querySelector('.left')

// const h1 = document.getElementsByTagName('h1')
const addedH1 = document.querySelector('.right')

const s1Coord = section1.getBoundingClientRect()
const s2Coord = section2.getBoundingClientRect()



const init = () => {
    setTimeout(() => {

        introEl.classList.add('after')
    }, 1000);
}

init()


const observerCallback = function (entries, observer) {
    // entries.forEach(entry => console.log(entry))

    const [entry] = entries

    if (!entry.isIntersecting) {
        console.log('now')
        profile.classList.add('added')
        addedH1.classList.add('added')
    }
}

const observerOpt = {
    root: null,
    threshold: 0.6
}

const observer = new IntersectionObserver(observerCallback, observerOpt);

observer.observe(section1)

//  For Sticky NavBar
const navSection = document.getElementById('section-navbar')

window.addEventListener('scroll', function(e){
    if(window.scrollY > s1Coord.bottom){
        navSection.classList.add('sticky')
    }else if(window.scrollY < s2Coord.top){
        navSection.classList.remove('sticky')
    }
})

// For scroll Into Sections

const navBarContainer = document.querySelector('.navBar')

navBarContainer.addEventListener('click', function(e){
    if(e.target.classList.contains('home')){
        section1.scrollIntoView({behavior: "smooth"})
    }
    if(e.target.classList.contains('About')){
        section2.scrollIntoView({behavior: "smooth"})
    }
    if(e.target.classList.contains('Projects')){
        section3.scrollIntoView({behavior: "smooth"})
    }
    if(e.target.classList.contains('Contact')){
        footer.scrollIntoView({behavior: "smooth"})
    }
})

const hambugBG = document.querySelector('.hambug-bg')

hambugBG.addEventListener('click', function(e){
    console.log(e)
    if(e.target.classList.contains('home1')){
        console.log("hello")
        section1.scrollIntoView({behavior: "smooth"})
    }
    if(e.target.classList.contains('about')){
        console.log("hello")
        section2.scrollIntoView({behavior: "smooth"})
    }
    if(e.target.classList.contains('skills')){
        console.log("hello")
        section3.scrollIntoView({behavior: "smooth"})
    }
    if(e.target.classList.contains('contact')){
        console.log("hello")
        footer.scrollIntoView({behavior: "smooth"})
    }
})

//// Ham bug menu Toggle
let nav = document.querySelector(".hambug")
const navSec = document.getElementById('#hambug-section')
nav.addEventListener("click", ()=>{
	document.querySelector(".hambug").classList.toggle("change");
	// document.querySelector(".hambg").classList.toggle("change");
	// document.querySelector(".hamItems").classList.toggle("itemChange");
	document.getElementById('hambug-section').classList.toggle("change");
})


// var swiper = new Swiper('.swiper-container', {
// 	direction: 'vertical',
// 	slidesPerView: 1,
// 	spaceBetween: 30,
// 	mousewheel: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	},
// });