document.getElementById('box').addEventListener('click', function() {
    document.getElementById('carouselExampleDark').style.opacity = '1';
});
let count = 0;
const countDisplay = document.getElementById('count');

function decrement() {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    } else {
        alert("Error! Count cannot be negative.");
    }
}

function increment() {
    count++;
    countDisplay.textContent = count;
}
