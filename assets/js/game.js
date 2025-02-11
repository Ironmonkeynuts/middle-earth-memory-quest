// Define variables
let firstcard = null;
let secondcard = null;
let lockBoard = false; // Prevents clicking more than two cards at a time
let totalPairs = 0;
let matchedPairs = 0;
let score = 0;

//Array containing image file paths
const imagePaths = [
    'images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg',
    'images/img5.jpg', 'images/img6.jpg', 'images/img7.jpg', 'images/img8.jpg',
    'images/img9.jpg', 'images/img10.jpg', 'images/img11.jpg', 'images/img12.jpg',
    'images/img13.jpg','images/img14.jpg', 'images/img15.jpg','images/img16.jpg'
];

// Function to start the game
function startGame() {
    const pairs = parseInt(document.getElementById('pairs').value); // Get number of pairs

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