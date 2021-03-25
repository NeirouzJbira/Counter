// querying the dom to select the elements
const countNum = document.querySelector('#countNum')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const reset = document.querySelector('#reset')

// set initial value of the count, which is 0
let count = 0

// update the count displayed
const updateCount = () => {
    countNum.innerHTML = count
}

// add click events for +, - and reset buttons
plus.addEventListener('click', function () {
    count++
    updateCount()
})

minus.addEventListener('click', function () {
    if (count <= 0) {
        return
    } else {
        count--
        updateCount()
    }
})

reset.addEventListener('click', function() {
    count = 0
    updateCount()
})