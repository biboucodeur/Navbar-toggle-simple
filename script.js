const link = document.querySelector('.link');
const fabars = document.querySelector('.fa-bars');
const btn = document.querySelector('button');

fabars.addEventListener('click', () => {
    link.classList.toggle("afficher");
    btn.classList.toggle("afficher");
    fabars.classList.toggle('fa-times')
});
