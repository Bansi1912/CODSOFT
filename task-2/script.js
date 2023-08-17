const serviceModals = document.querySelectorAll(".service-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal=function(modalClick){
    serviceModals[modalClick].classList.add("active")
}
learnmoreBtns.forEach((learnmoreBtn,i) =>{
    learnmoreBtn.addEventListener("click",() =>{
        modal(i);
    });
});


modalCloseBtns.forEach((modalCloseBtn) =>{
    modalCloseBtn.addEventListener("click",() =>{
        serviceModals.forEach((modalView)=>{
            modalView.classList.remove("active");
        });
    });
});





const portfolioModals = document.querySelectorAll(".project-modal");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal=function(modalClick){
    portfolioModals[modalClick].classList.add("active")
}
imgCards.forEach((imgCard,i) =>{
    imgCard.addEventListener("click",() =>{
        portfolioModal(i);
    });
});


portfolioCloseBtns.forEach((portfolioCloseBtn) =>{
    portfolioCloseBtn.addEventListener("click",() =>{
        portfolioModals.forEach((portfolioModalView)=>{
            portfolioModalView.classList.remove("active");
        });
    });
});


const scrollTopBtn= document.querySelector(".scrolltotop-btn");
window.addEventListener("scroll",function(){
    scrollTopBtn.classList.toggle("active",this.window.scrollY>500);
});

scrollTopBtn.addEventListener("click",()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
});



const menuBtn =document.querySelector(".nav-menu-btn");
const closeBtn =document.querySelector(".nav-close-btn");
const navigation =document.querySelector(".navigation");

menuBtn.addEventListener("click",()=>{
    navigation.classList.add("active");
});

closeBtn.addEventListener("click",()=>{
    navigation.classList.remove("active");
});
 

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal(' .info, .section-title,.contact-form',{origin:'top'});
ScrollReveal().reveal('.professional-list,button,.all-skills,.project-list,.contect-icons,.footer-container',{origin:'bottom'});
ScrollReveal().reveal('.media-icons,.about-img,.skills-description p,.services-description h3,.sm-title,.content-left',{origin:'left'});
ScrollReveal().reveal('.home-img,.info h2,.discription,.skills-description h3,.service-list,.get-in-touch,.content-right p',{origin:'right'});

