//images in an array
const images = [{
    
}
]


const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click',e=>{
   console.log(e.target.dataset.id);
   const id = e.target.dataset.id
   if(id){
   //remove active
   btns.forEach(btn =>{
       btn.classList.remove('active');
       e.target.classList.add('active');
   })
   articles.forEach(artic =>{
       artic.classList.remove('active');
    })
       const element = document.getElementById(id);
       element.classList.add('active');
    }
})