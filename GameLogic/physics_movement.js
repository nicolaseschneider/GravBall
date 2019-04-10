//correct for upsidedown
var moveAcc = move * movespeed
if (gravityDirect == 2 || gravityDirect == 1){
    moveAcc = -moveAcc;
}
