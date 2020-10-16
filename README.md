# Towers of Hanoi
Created classic Towers of Hanoi game with 4 blocks ('disks')

## Description
* Tower of Hanoi consists of three towers with blocks placed one over the other, with the smallest block at
the top.
* The objective of the game is to move the stack to the final tower (tower3) following these two rules:
1. Only one block can be moved at a time.
2. No block can be placed on top of a block smaller than itself.

This was more challenging to make than I had anticipated. I picked this game because I had a vision of how I wanted to build the game before starting. Unfortunately, a lot of that went out the window once I started. The biggest challenges I had were figuring out how to move the blocks to another pole (I had to create an additional variable that is invisible called 'base'). The other challenge was figuring out how to store the data for when a block or pole was clicked, I did this by assigning 'ids' to each variable and using an empty array to push/pop the variables in and out of it. 

## Levels
### Bronze - Completed
* Game fully works:
    * Blocks can move to chosen tower
    * Size logic works -  bigger blocks cannot be placed on top of smaller blocks.
    * No illegal moves or bugs are allowed.
    * Game ends and winner is declared if all 4 blocks are placed on tower 3.
    * Instructions are on the page for any player.

### Silver - Completed
* When Start Game button is clicked, timer starts to keep track of how long it takes the player to win.
* Instructions should already be on the page).
* Restart button that returns the game to its original state and clears in-play arrays.
* Function to keep track of moves used per round to win game.
* Function to track how many times a player wins.

### Gold - Attempted
* Scoring based on user time (Bonus points for being under a certain timeframe).
* Save user scores despite refresh - when a player returns to the page their scores are still there.
* Make game responsive for phones/tablets and differing screen sizes.
* Add title page and background. Game board is hidden until start game button is clicked.

## List of Technologies Used
* HTML
* CSS
* Vanilla JavaScript (with DOM)

## Hurdles and Ongoing Challenges

### Process
I started with CSS and HTML. I spent a lot of time on this and caught myself “going for gold” multiple times. I chose this game because of a previous project I did that already had my grid built for the three towers I was going to make. I thought that would make things easier and give me a head start... I thought wrong. 

The process began with building a wireframe of the gameboard. I began placing classes and IDs in HTML in the order I wanted while creating different containers and layers to my setup. Once the HTML was done I moved to CSS to make the page appeal pleasing to the eye and to make sure everything was correctly positioned. After this I moved to Javascript and I began the process by making three empty arrays.  I worked through the problems with JavaScript only, then began to realize that I needed to tie in HTML elements and use DOM manipulation (a lot of DOM manipulation) to make the game function how I wanted.  I enjoyed the process of creating and designing the page and making the game functional. I would say more than half my time was spent fixing and debugging until the game functionality was clean.

### My biggest hurdle
This came when I had the game somewhat functioning. If a block was placed on tower 3 it would get stuck there. I could not figure out what was wrong and spent a lot of time trying to identify the bug. I eventually found the typo ... I had written 'tower-3' instead of 'tower-three'. This was a lesson for me in the future to not write out numerics for html elements. 

### Ongoing challenges
As a result of spending so much time attempting to debug my code, I didn't get to make my start button fully functional. It starts the timer but my hope was that a player could not start playing until the start button was clicked. Preferably the gameboard would be hidden until the start button was clicked. I attempted this but found myself chasing my tail trying to make it work. The game is also not responsive for smaller screens. I built my game using a large monitor so the game being rendered on a smaller screen will be problematic.

### In summary
This was a great experience. It gave me a better understanding of how often a developer has to look up solutions to their problems. I forced myself to not ask instructors for help on this project more than other projects so that I was forced to find my own solutions. I feel FAR more comfortable with CSS than before. If I started this project over I would make use of Classes in Javascript much more and get rid of my absurd amount of functions. Overall, I am proud of how the game looks and functions and even more proud of the amount of roadblocks I managed to push through. 

## Citation
I used code from Stack Overflow for my timer.
My instructor Noah, also helped me to complete my moves per round and number of wins trackers.


