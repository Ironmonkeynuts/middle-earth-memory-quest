// Game variables
let firstcard = null;
let secondcard = null;
let lockBoard = false; // Prevents clicking more than two cards at a time
let totalPairs = 0;
let matchedPairs = 0;
let score = 0;

//Array containing image file paths
const imagePaths = [
    'aragorn.jpeg', 'boromir.jpeg', 'elrond.jpeg', 'eomer.jpeg',
    'eowyn.jpeg', 'frodo.jpeg', 'galadriel.jpeg', 'gandalf.jpeg',
    'gimli.jpeg', 'grima.jpeg', 'legolas.jpeg', 'merry.jpeg',
    'pippin.jpeg','samwise.jpeg', 'saruman.jpeg','theoden.jpeg'
];

// Function to start the game
function startGame() {
    const pairs = parseInt(document.getElementById('pairs').value); // Get number of pairs from user input

    totalPairs = pairs;
    matchedPairs = 0;
    score = 0;
    updateScore();

    // Select a subset of images based on the number of pairs chosen
    const selectedImages = imagePaths.slice(0, pairs);
    // Duplicate and shuffle images to create game board
    const gameImages = [...selectedImages, ...selectedImages].sort(() => Math.random() - 0.5); 
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear the game board

    // Create card elements for each image and add to game board
    gameImages.forEach((imgSrc, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = imgSrc;
        card.onclick = () => flipCard(card);
        const img = document.createElement('img');
        img.src = imgSrc;
        card.appendChild(img);
        gameBoard.appendChild(card);
    });
}

// Function to handle card flipping
function flipCard(card) {
    if (lockBoard || card.classList.contains('flipped')) return; // Prevent flipping more than two cards
    card.classList.add('flipped');
    if (!firstCard) {
        firstCard = card; // Set first card if not already set
    } else {
        secondCard = card; // Set second card and check for match
        lockBoard = true; // Prevent additional clicks until match check is done
        
        setTimeout(checkMatch, 1000);
    }
}