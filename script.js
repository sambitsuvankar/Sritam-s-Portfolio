

const section1 = document.querySelector('#section-1')

const introEl = document.querySelector('.intro')

const profile = document.querySelector('.left')

// const h1 = document.getElementsByTagName('h1')
const addedH1 = document.querySelector('.right')




const init = () => {
    setTimeout(() => {

        introEl.classList.add('after')
    }, 1000);
}

init()


const observerCallback = function (entries, observer) {
    entries.forEach(entry => console.log(entry))

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

