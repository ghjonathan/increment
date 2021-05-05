let increase = 0
scene.setBackgroundColor(5)
let Coach = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . f 3 3 3 3 3 3 3 f . . . . 
    . . f 3 3 3 3 f 3 3 3 3 f . . . 
    . f 3 3 3 3 f 9 f 3 3 3 3 f . . 
    f 1 3 3 3 3 3 f 3 3 3 3 1 3 f . 
    f 3 1 1 1 1 3 3 3 1 1 1 3 3 f . 
    f 3 3 f f f 3 3 3 f f f 3 3 f . 
    f 3 3 3 3 3 3 3 3 3 3 3 3 3 f . 
    f 3 3 3 1 1 1 1 1 1 3 3 3 3 f . 
    f 3 3 3 1 f f f f f 1 3 3 3 f . 
    f 3 3 3 1 3 3 1 3 3 1 3 3 3 f . 
    . f 3 3 1 3 1 1 1 3 1 3 3 f . . 
    . . f 3 3 3 1 1 1 3 3 3 f . . . 
    . . f 3 3 1 1 1 1 1 3 3 f . . . 
    . . . f f f f f f f f f . . . . 
    `, SpriteKind.Player)
for (let index = 0; index <= 10; index++) {
    pause(200)
    Coach.x += 5 + increase
    pause(200)
    Coach.y += 6 + increase
    pause(200)
    Coach.x += -7 - increase
    pause(200)
    Coach.y += -8 - increase
    increase = index * 5
}
