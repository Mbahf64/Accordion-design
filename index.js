const accordion = document.getElementsByClassName('contentBx');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}



// const faqs = document.querySelectorAll('.contentBx');

// faqs.forEach(faq => {
//     faq.addEventListener('click', () => {
//         faq.classList.toggle('active')
//     })
// })