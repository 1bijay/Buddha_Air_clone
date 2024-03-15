let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form');
let formclose = document.querySelector('#form-close');
window.onscroll = () =>{
    loginForm.classList.remove('active');
}
formBtn.addEventListener('mouseover', ()=>{
    loginForm.classList.add('active');
});

formclose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
})


