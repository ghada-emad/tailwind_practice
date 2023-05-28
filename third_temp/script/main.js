const showing=document.getElementById('show');
const closing=document.getElementById('close');
const nav=document.getElementById('menu');

showing.addEventListener('click',()=>{
    showing.classList.add('hidden');
    closing.classList.remove('hidden');
    nav.classList.add('flex');
    nav.classList.toggle('hidden');
});

closing.addEventListener('click',()=>{
    showing.classList.remove('hidden');
    closing.classList.add('hidden');
    nav.classList.add('hidden');
})