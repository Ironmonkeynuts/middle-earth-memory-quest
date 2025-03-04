/* jshint esversion: 11 */

/**
 * @jest-environment jsdom
 */

// Correct the import path for game.js
const { test, expect, beforeEach } = require('@jest/globals');
const { startGame, createCards, flipCard, checkMatch } = require('../game');

jest.spyOn(window, 'alert').mockImplementation(() => {});

// Load index.html in Jest
beforeAll(() => {
    let fs = require('fs');
    let fileContents = fs.readFileSync('index.html', 'utf-8');
    document.open();
    document.write(fileContents);
    document.close();
    // document.body.innerHTML = `
    //     <div id="game-board"></div>
    //     <div id="score">Score: 0</div>
    //     <input id="pairs" value="4" />
    //     <button id="start-btn"></button>
    // `;
    // const startBtn = document.getElementById('start-btn');  
});
