document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.buy-button');

    buyButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const cardId = card.getAttribute('data-id');
            const cardName = card.querySelector('.card-name').innerText;
            const cardPrice = card.querySelector('.sell h1').innerText;
            const cardImg = card.querySelector('.card-img').src;
            const cardInfo = card.querySelector('.card-info h1').innerText;

            const cartItem = {
                id: cardId,
                name: cardName,
                price: cardPrice,
                img: cardImg,
                info: cardInfo
            };

            let cart = localStorage.getItem('cart');
            cart = cart ? JSON.parse(cart) : [];

            const existingItemIndex = cart.findIndex(item => item.id === cardId);

            if (existingItemIndex === -1) {
                cart.push(cartItem);
                localStorage.setItem('cart', JSON.stringify(cart));
                alert('Додано до кошика');
            } else {
                alert('Вже в кошику');
            }
        });
    });
});
