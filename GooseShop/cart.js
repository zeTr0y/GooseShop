document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cart = localStorage.getItem('cart');
    const cartItems = cart ? JSON.parse(cart) : [];

    cartItems.forEach(item => {
        const desCard = document.createElement('div');
        desCard.className = 'des-card';
        desCard.innerHTML = `
            <img src="${item.img}" class="des-img">
            <div class="des-other">
                <div class="des-name-price">
                    <h1 class="card-name">${item.name}</h1>
                    <h1 class="des-price">${item.price}</h1>
                </div>
                <div class="card-info">
                    <h1>${item.info}</h1>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(desCard);

        desCard.addEventListener('click', () => {
            const confirmImg = document.getElementById('confirm-img');
            const backdrop = document.getElementById('backdrop');
            

            const allCards = document.querySelectorAll('.des-card');
            allCards.forEach(card => {
                if (card !== desCard) {
                    card.classList.add('hidden'); 
                }
            });

            confirmImg.src = "src/buy-icon-removebg-preview.png";
            confirmImg.style.display = 'block';
            backdrop.style.display = 'block';


            const cardRect = desCard.getBoundingClientRect();
            confirmImg.style.left = `${cardRect.left + (cardRect.width / 2) - (confirmImg.width / 2)}px`;
            confirmImg.style.top = `${cardRect.top + (cardRect.height / 2) - (confirmImg.height / 2)}px`;


            backdrop.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        });
    });


    const backdrop = document.getElementById('backdrop');
    backdrop.addEventListener('click', () => {
        const confirmImg = document.getElementById('confirm-img');
        

        confirmImg.style.display = 'none';
        backdrop.style.display = 'none';


        const allCards = document.querySelectorAll('.des-card');
        allCards.forEach(card => {
            card.classList.remove('hidden');
        });

        backdrop.style.backgroundColor = 'transparent';
    });
});
