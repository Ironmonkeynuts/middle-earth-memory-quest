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
    numPairs = parseInt(pairs.value);
    // Validate input (ensure it's between 2 and 16)
    if (isNaN(numPairs) || numPairs < 2 || numPairs > 16) {
        alert("Please enter a number between 2 and 16.");
        return;
    }

    selectedImages = imagePaths.slice(0, numPairs); // Pick only the chosen number of images
    cards = [...selectedImages, ...selectedImages].sort(() => Math.random() - 0.5); // Duplicate and shuffle images to create game board
   
    matchedPairs = 0;
    score = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    createCards(); // Create game cards
}

// Function to create game cards
function createCards() {
    gameBoard.innerHTML = ''; // Clear the game board
    let gridSize = Math.ceil(Math.sqrt(numPairs * 2)); // Adjust grid dynamically
    gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 120px)`;

   cards.forEach((image) => {
        const card = document.createElement("div");
        card.classList.add("card", "m-2");

        // Create front face (hidden initially)
        const frontImg = document.createElement("img");
        frontImg.src = `assets/images/${image}`;
        frontImg.alt = "Middle-Earth Character";
        frontImg.classList.add("front");
        
        // Create back face (always visible until flipped)
        const backImg = document.createElement("img");
        backImg.src = cardBackImage;
        backImg.alt = "Card Back";
        backImg.classList.add("back");

        card.appendChild(frontImg);
        card.appendChild(backFace);
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

// Function to handle card flip
function flipCard() {
}

// Event listeners
startBtn.addEventListener("click", startGame);