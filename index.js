let ratingOptions = document.querySelectorAll('.rating')
let userRating

console.log(ratingOptions);

// for (let i = 0; i< ratingOptions.length;i++) {
//     document.addEventListener('onclick',(i) => {
//         console.log('Hello');
//     } )
// }

// for (const rating in ratingOptions) {
//     rating.onClick = () => {
//         console.log('hello')
//     }
// }
function clickHandler() {
    console.log('Hiiii');
}

let pageBody = document.getElementsByTagName('body')[0]
console.log(pageBody);

pageBody.onClick = () => {
    console.log('123');
}