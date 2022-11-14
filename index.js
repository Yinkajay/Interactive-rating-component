const ratingOptions = document.querySelectorAll('.rating')
const pageBody = document.querySelector('body');
const submitBtn = document.getElementById('submit-btn')
const beforeSubmission = document.querySelector('.pre-sub')
const afterSubmission = document.querySelector('.post-sub')
const answerSpan = document.querySelector('.answer')
let answer = ''


// console.log(ratingOptions);


ratingOptions.forEach(element => {
    element.addEventListener('click', () => {
        ratingOptions.forEach((element) => { element.classList.remove('clicked') })
        answer = element.innerHTML
        console.log(answer);
        element.classList.toggle('clicked')
    })
});

submitBtn.onclick = (event) => {
    event.preventDefault()
    console.log('value submitted');
    answerSpan.innerHTML = `${answer}`
    toggleContent()
}

function toggleContent() {
    if (answer.trim() === '') {
        beforeSubmission.style.display = 'block'
        afterSubmission.style.display = 'none'
    } else {
        beforeSubmission.style.display = 'none'
        afterSubmission.style.display = 'block'
    }
}   