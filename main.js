(function () {
    
    // Nav-bar class
    const nav = document.querySelector('nav .container');
    window.addEventListener('scroll', eve => {
        eve.preventDefault();
        if (window.scrollY > 50) {
            nav.classList.add('bg-glass');
        } else {
            nav.classList.remove('bg-glass');
        }
    })

    // Header Animations
    function animateHeading() {
        const actImg = document.querySelector('.act-img img');
        actImg.classList.add('ani-act-img');

        const actText = document.querySelector('.act-text');
        actText.style.bottom = "-250px";
        setTimeout(() => {
            actText.classList.add('ani-act-text');
            actText.style.bottom = "0";
        }, 1000);
    }
    window.addEventListener('load', eve => {
        eve.preventDefault();
        return animateHeading()
    })

    const infoList = document.querySelectorAll('.info-list .list');
    const aniDir = ['fade-left', 'fade-right', 'fade-up', 'fade-up'];
    const messEl = document.querySelectorAll('.message .col');
    const testiList = document.querySelectorAll('.testimonial-list');
    const subBox = document.querySelector('.subscription .sub-box');
    function animate(el, name) {
        el.style.opacity = "0"
        el.classList.add(name);
        el.style.opacity = "1";
    }
    function logic(el, name) {
        if (window.pageYOffset > (el.getBoundingClientRect().top + 50)) {
            return animate(el, name)
        }
        return;
    }
    infoList.forEach(el => el.style.opacity = "0")
    messEl.forEach(el => el.style.opacity = "0")
    testiList.forEach(el => el.style.opacity = "0")
    subBox.style.opacity = "0";
    window.addEventListener('scroll', () => {
        infoList.forEach((el, index) => {
            logic(el, aniDir[index])
        })
        messEl.forEach((el, index) => {
            setTimeout(() => {
                logic(el, aniDir[index])
            }, 2000)
        });
        testiList.forEach(el => {
            setTimeout(() => { logic(el, 'fade-up') }, 2000);
        })
        setTimeout(() => { logic(subBox, 'scale-up') }, 2000);
    })
    
})();

(() => {
    
    const email = document.querySelector('.email');
    const btnSubmit = document.querySelector('.submit');
    const err = document.querySelector('.error-wrapper');
    btnSubmit.addEventListener('click', () => {
        validateEmail()
    })
    function validateEmail() {
        const value = email.value;
        if (/[A-Za-z0-9]@*.com/g.exec(value)) {
            email.value = "";
            err.classList.add('info');
            err.classList.remove('danger');
            err.innerHTML = "Your subscription is success"
        }
        else {
            err.classList.add('danger');
            email.value = '';
            email.focus();
            err.innerHTML = "Please enter a valid email address";
            return;
        }
    }

})()