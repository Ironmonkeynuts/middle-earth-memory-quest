// Define variables
let firstcard = null;
let secondcard = null;
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
}