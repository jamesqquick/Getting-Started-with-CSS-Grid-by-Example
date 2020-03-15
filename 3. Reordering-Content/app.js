const shuffleBtn = document.getElementById('shuffleBtn');
const items = [...document.querySelectorAll('.item')];

console.log(items);
shuffleBtn.addEventListener('click', () => {
    items.forEach((item) => {
        const random = Math.floor(Math.random() * 4);
        item.setAttribute('style', `order: ${random};`);
    });
});
