// Get elements
const gameBoard = document.getElementById("game-board");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("start-btn");
const pairs = document.getElementById("pairs");

// Game variables
let selectedImages = [];
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let score = 0;
let numPairs = 4; // Default number of pairs

//Array containing image file paths
const imagePaths = [
    'aragorn.jpeg', 'boromir.jpeg', 'elrond.jpeg', 'eomer.jpeg',
    'eowyn.jpeg', 'frodo.jpeg', 'galadriel.jpeg', 'gandalf.jpeg',
    'gimli.jpeg', 'grima.jpeg', 'legolas.jpeg', 'merry.jpeg',
    'pippin.jpeg','samwise.jpeg', 'saruman.jpeg','theoden.jpeg'
];

const cardBackImage = "assets/images/eye.jpeg"; // General image for card back

// Function to start the game
function startGame() {

    matchedPairs = 0;
    score = 0;

    // Select a subset of images based on the number of pairs chosen
    const selectedImages = imagePaths.slice(0, pairs);
    // Duplicate and shuffle images to create game board
    const gameImages = [...selectedImages, ...selectedImages].sort(() => Math.random() - 0.5); 
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear the game board
}

// Function to create game cards
function createCards {
    gameImages.forEach((imgSrc, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = imgSrc;

    const img = document.createElement('img');
    img.src = imgSrc;
    card.appendChild(img);
    gameBoard.appendChild(card);
    });
}

// Function to handle card flipping
function flipCard(card) {

}