## gAMe

### Background
gAMe is about going thinking fast and moving faster. The goal is simple. Collect as many boxes as you can without dying to try and get the high score while utilizing an arsenal of different weapons to dispatch the neverending horde of enemies trying to stop you. normal platformers have simple movement controls. Left Right and jump. gAMe expands on that basic formula without adding too much complexity. You can still move left and right and jump, but you can also rotate the global pull of gravity 90 degrees with the push of a button. I could type on and on about what the game should look and play like. But why bother reading when you could just play it.

### Functionality and MVPs

players can do the following
- [ ] run left and right (FAST)
- [ ] jump
- [ ] flip gravity 90 degrees
- [ ] shoot
- [ ] collect points
- [ ] die
game will include:
- [ ] High Scores
- [ ] instructions modal
- [ ] going fast
- [ ] a production README

### Wireframes
The app consists of a single screen with the game, nav links to my github, linkedin and my website.

### Technologies
Implemented using the following:
- 'Javascript' for game logic,
- 'Foo.js' with 'HTML5 Baz' for effects rendering,
- 'Browserify' to bundle js files

In addition to the entry file, there will be a bunch of scripts involved in this project.
`object.js`
    `player.js`
    `enemy.js`
    `box.js`
    `wall.js`
    `gun.js`
    to handle all object based logic
`physics_movement.js`
    `onground.js`
    `grav_flip.js`
    `collision.js`
    to handle all physics and movement based logic

###Implementation Timeline
**Day1** Setup file and import structure
    Goals for the day:
        -get a green webpack
        -get the player moving on the screen
**Day2** implement gravity flipping/collision
    Goals for the day:
        -be able to rotate objects gravity (optionally also rotate the canvas to match)
        -be able to collide with walls/boxes/enemies
**Day3** implement more game logic
    Goals for the day:
        -save high scores
        -style everything.
