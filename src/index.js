const addOne = document.querySelector('#add-one');
const results = document.querySelector('#results')
addOne.addEventListener('click', () => {
    results.textContent++;
})
console.log(results.textContent)