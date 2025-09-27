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
      answer: 'JavaScript is a programming language that is commonly used in web development. It was originally developed by Netscape as a means to add dynamic and interactive elements to websites. Over the years, JavaScript has evolved into a versatile language that can be used for both client-side and server-side development.'
    },
    { question: 'What is a closure?',
      answer: 'A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function\'s variables and parameters, even after the outer function has returned. This allows the inner function to "remember" the environment in which it was created, enabling data encapsulation and the creation of private variables.'
    },
    { question: 'What is HTML?',
      answer: 'HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the web. It provides the basic building blocks for web pages, allowing developers to define elements such as headings, paragraphs, links, images, and more.'
    }
];


