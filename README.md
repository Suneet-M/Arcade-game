# Frogger

This project is a simple clone of the arcade game: Frogger.\
The game's dependencies have to be installed first by running `npm install` in a terminal in the game's root directory. Then it can be played by running `gulp` in the terminal.\
Other files in respective folders do not need any action.

## Instructions
- The aim of the game is to take the player across the roads to the water while avoiding the bugs.
- Arrow keys can be used to move the player.
- Beware, the bugs keep changing their speeds.
- Every time your player touches a bug one life is lost and player returns to starting position.
- A total of 8 lives are given in each game. Life counter is given in the score panel.
- You win the game as soon as your player reaches the water.
- A modal box will be displayed with your lives left and an option to play again.

## Future Updates
- [x] Implement a win modal screen
- [x] Player would not return to start position, no life reset, and pause enemy position when win modal is displayed
- [x] Use animate.css for modal
- [ ] Add a move counter
- [ ] Add reset button
- [ ] Implement a start screen
- [ ] Give option to select between characters
- [ ] Randomise number of bugs instead of fixed value at 2 bugs per line