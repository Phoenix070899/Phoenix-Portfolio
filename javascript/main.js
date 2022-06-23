const porfolioList = [
    {
        linkHref: 'https://phoenix070899.github.io/music-player/',
        imgUrl: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Javascript Music Player',
        detail: 'Create a basic Music Player with HTML, CSS. Get used to with DOM and events.'
    },
    {
        linkHref: 'https://phoenix070899.github.io/login-validation/',
        imgUrl: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Javascript Sign-in Validation',
        detail: 'Create a basic Login Page with HTML, CSS. When users fill-in each field, value will be check whether correct or not, and give feedback to users.'
    },
    {
        linkHref: 'https://phoenix070899.github.io/weather-app/',
        imgUrl: 'https://images.unsplash.com/photo-1500390365106-166bb67248d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Javascript Weather App',
        detail: 'Create a weather app. Using Openweathermap API to fetch data, get up-to-date weather detail of user\'s city and show on display.'
    },
    {
        linkHref: 'https://spotify-clone-ochre-nine.vercel.app/',
        imgUrl: 'https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80',
        title: 'Spotify Clone Player Control',
        detail: 'Clone Spotify Player using Spotify API. Using ReactJS to render components on Website and TailwindCSS to style. Also I use Axios to fetch data form Spotify API.'
    },
]

const controlBtns = document.querySelectorAll('.control')
const sections = document.querySelectorAll('.section')
const mainContent = document.querySelector('.main-content')
const porfolioItems = document.querySelector('.porfolio-items')
const porfolioBtn = document.querySelector('.view-btn')

function start () {
    handleClickCtrl()
    renderPorfolioItems()
}

porfolioBtn.addEventListener('click', () => {
    let currentBtn = document.querySelector('.active-ctrl') 
    let currentPage = document.querySelector('.section.active')
    currentBtn.classList.remove('active-ctrl')
    controlBtns[2].classList.add('active-ctrl')
    currentPage.classList.remove('active')
    sections[2].classList.add('active')
})


function handleClickCtrl () {
    for (let i = 0; i < sections.length; i++) {
        
        controlBtns[i].addEventListener('click', () => {
            
            //handle click button
            let currentBtn = document.querySelector('.active-ctrl')
            currentBtn.classList.remove('active-ctrl')
            controlBtns[i].classList.add('active-ctrl')
            console.log(123)
            
            //handle page transition
            let currentPage = document.querySelector('.section.active')
            currentPage.classList.remove('active')
            sections[i].classList.add('active')
        })
        
    }
}

function renderPorfolioItems() {
    let porfolioItemsHtml = porfolioList.map(function(porfolioItem) {
        return `
        <li>
        <a target="_blank" class="porfolio-item" href=${porfolioItem.linkHref}>
            <div class="item-img">
                <img src=${porfolioItem.imgUrl}
                    class="img-1" alt="">
            </div>
            <div class="item-des">
                <h4>${porfolioItem.title}</h4>
                <p>${porfolioItem.detail}</p>
            </div>
        </a>
    </li>
        `
    })
    porfolioItems.innerHTML = porfolioItemsHtml.join('')
}



start()