document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.querySelector(".game");
    const gameTwoContainer = document.querySelector(".game-two");

    // Repetir duas vezes a div .game
    for (let i = 0; i < 1; i++) {
        const clone = gameContainer.cloneNode(true);
        document.body.appendChild(clone);
    }

    // Repetir duas vezes a div .game-two
    for (let i = 0; i < 1; i++) {
        const clone = gameTwoContainer.cloneNode(true);
        document.body.appendChild(clone);
    }
});
