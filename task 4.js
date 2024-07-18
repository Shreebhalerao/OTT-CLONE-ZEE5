const slides = document.querySelectorAll(".slide");
let Login = document.querySelector(".log-btn");
let gayb =document.querySelector('.gayb');
let Close= document.querySelector('.close');

let Signuptxt= document.querySelector('.signuptxt');
let Name= document.querySelector('.my-name');
let SignupBody= document.querySelector('.signup-body');
let Signup= document.querySelector('.signup');
let Signin= document.querySelector('.signin');
let btn = document.querySelector('.btn')




/* close login page  */
Close.addEventListener('click',()=>{
    gayb.classList.add('gayb');

});
/* close login page ends  */


/* sign in and sign up start  */

Signin.addEventListener('click',()=>{
    Signuptxt.innerHTML='Sign In';
    Name.classList.add('name');
    SignupBody.style.marginTop ='50px';
    btn.style.marginTop ='98px';
});

Signup.addEventListener('click',()=>{
    Signuptxt.innerHTML='Sign Up';
    Name.classList.remove('name');
    SignupBody.style.marginTop ='30px';
    btn.style.marginTop ='50px';
});
/* sign in and sign up end */


/* login in   */

Login.addEventListener('click',()=>{
    gayb.classList.remove('gayb');
    
});
/* login in   ends */



/* slider  */


let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImages();
};

const goNext = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    slideImages();
};

const slideImages = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};

/* slider   end */




 


 