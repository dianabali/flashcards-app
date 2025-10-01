const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEL = document.getElementById('question');
const answerEL = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Keep track of the current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];

// Store card data
const cardsData = getCardsData();

// Create cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card
function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    // Set the first card to be active
    if(index === 0) {
        card.classList.add('active');
    }

    // Add inner HTML
    card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                <p>${data.question}</p>
            </div>
            <div class="inner-card-back">
                <p>${data.answer}</p>
            </div>
        </div>
    `;

    // Add click event to flip the card
    card.addEventListener('click', () => card.classList.toggle('show-answer'));

    // Add to DOM cards
    cardsEl.push(card);

    // Append to container
    cardsContainer.appendChild(card);

    // Update current card number
    updateCurrentText();
}

// Show card number
function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1} / ${cardsEl.length}`;
}

// Get cards from local storage
function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards'));
    return cards === null ? [] : cards;
}

// Show cards
createCards();

// Event listeners
// Next button
nextBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card left'; // Move current card to left
    currentActiveCard += 1; // Move to next card

    if(currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1; // Stay at last card
    } 

    cardsEl[currentActiveCard].className = 'card active'; // Set next card to active
    
    updateCurrentText();
});

// Previous button
prevBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card right'; // Move current card to right
    currentActiveCard -= 1; // Move to previous card

    if(currentActiveCard < 0) {
        currentActiveCard = 0; // Stay at first card
    } 

    cardsEl[currentActiveCard].className = 'card active'; // Set next card to active
    
    updateCurrentText();
});

// Show add container
showBtn.addEventListener('click', () => {
    addContainer.classList.add('show');
});

// Hide add container
hideBtn.addEventListener('click', () => {
    addContainer.classList.remove('show');
});

// Add new card
addCardBtn.addEventListener('click', () => {
    const question = questionEL.value;
    const answer = answerEL.value;

    if(question.trim() && answer.trim()) {
        const newCard = { question, answer };
        
        cardsData.push(newCard);

        localStorage.setItem('cards', JSON.stringify(cardsData));

        createCard(newCard, cardsData.length - 1);

        questionEL.value = '';
        answerEL.value = '';

        addContainer.classList.remove('show');
    }
});

// Clear cards button
clearBtn.addEventListener('click', () => {
    localStorage.clear(); 
    location.reload(); // Reload the page to reflect changes
});