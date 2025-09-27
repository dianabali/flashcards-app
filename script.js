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
const cardsData = [
    { question: 'What is JavaScript?',
      answer: 'JavaScript is a programming language that is commonly used in web development.'
    },
    { question: 'What is a closure?',
      answer: 'A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function\'s variables and parameters, even after the outer function has returned.'
    },
    { question: 'What is HTML?',
      answer: 'HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web.'
    }
];

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

    // Add to DOM cards
    cardsEl.push(card);

    // Append to container
    cardsContainer.appendChild(card);
}

// Show cards
createCards();
