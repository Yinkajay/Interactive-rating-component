let ratingOptions = document.querySelectorAll('.rating')
let userRating;
let pageBody = document.querySelector('body');


// pageBody.addEventListener("click", () => {
//     console.log('123');
// })

// ratingOptions.addEventListener('click', ()=>{
//     console.log('option clicked');
// })
console.log(ratingOptions);


// for (rating in ratingOptions) {
//     rating.addEventListener("click", () => {
//         console.log('Hello');
//     })
// }

ratingOptions.forEach(element => {
    element.addEventListener('click', () => {
        console.log('123');
    })
});

// for (const rating in ratingOptions) {
//     rating.onClick = () => {
//         console.log('hello')
//     }
// }