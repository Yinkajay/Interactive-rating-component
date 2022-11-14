const ratingOptions = document.querySelectorAll('.rating')
const pageBody = document.querySelector('body');
const submitBtn = document.getElementById('submit-btn')
const beforeSubmission = document.querySelector('.pre-sub')
const afterSubmission = document.querySelector('.post-sub')
let answer = ''


console.log(ratingOptions);


ratingOptions.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('clicked')
        answer = element.innerHTML
        console.log(answer);
    })
});

submitBtn.onclick = (event) => {
    event.preventDefault()
    console.log('value submitted');
    toggleContent(1)
}

function toggleContent() {
    if(answer.trim() === ''){
        beforeSubmission.style.display = 'block'
        afterSubmission.style.display = 'none'
    }else{
        beforeSubmission.style.display = 'none'
        afterSubmission.style.display = 'block'
    }
}