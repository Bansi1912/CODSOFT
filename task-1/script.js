ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.main-text h1,.cat-main,.footer-center',{origin:'top'});
ScrollReveal().reveal('.home-text h1,.home-img,.item-list,.service-row,.footer-company-name',{origin:'bottom'});
ScrollReveal().reveal('.home-text,.heading,.footer-left',{origin:'left'});
ScrollReveal().reveal('.side,.main-text p,.card-row,.footer-right',{origin:'right'});

