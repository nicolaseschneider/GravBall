export const collisionCheck = function(a, b) {

    return a.x + a.hsp < b.x + b.width &&
        a.x + a.hsp + a.width > b.x &&
        a.y + a.vsp < b.y + b.height &&
        a.y + a.vsp + a.height > b.y;
}


export const collisionCheckX = function(a, b) {
    // 


     return a.x + a.hsp < b.x + b.width &&
        a.x + a.hsp + a.width > b.x;
}

export const collisionCheckY = function(a, b) {
    // 


    return a.y + a.vsp < b.y + b.height &&
        a.y + a.vsp + a.height > b.y;
}

export const collisionBallCheck = function(player, ball){

    var dx = player.x - ball.x;
    var dy = player.y - ball.y;
    var distance = Math.sqrt(dx * dx + dy * dy) ;
    if (distance < player.radius + ball.radius) {
        return true;
    }
}

