// traversing the dom

// const Btns = document.querySelectorAll(".question-btn");
// Btns.forEach(i =>{
//     i.addEventListener('click',e => {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });
//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(que =>{
    console.log(que);
    const btn = que.querySelector('.question-btn');
    console.log(btn);

    questions.forEach(m =>{
        if (m !== btn){
            m.classList.remove('show-text')
        }
    });
    btn.addEventListener('click',()=>{
        que.classList.toggle('show-text');
    });
});