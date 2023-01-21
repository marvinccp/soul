const hamburgerItem = document.querySelector(".hamburguer-item");
hamburgerItem.addEventListener("click", () => {


  const navBar = document.querySelector('.nav-bar')
  navBar.classList.toggle('active')

});


const about = document.querySelector('.about')
about.addEventListener('click', () =>{

    let text = document.getElementById('text');
    text.classList.add('active')

    location.href = './about.html'

})

const home = document.querySelector('.home')
home.addEventListener('click', () =>{
    location.href = "./landingPage.html";
})