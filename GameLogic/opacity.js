export const fadeIn = function(r,g,b,frame){
    return `rgba(${r},${g},${b},${Math.min(frame * 0.005, 1)})`
}
export const elementFadeIn = function(frame){
    return Math.min(frame * 0.005, 1)
}

export const wavyGradient = function(frame){

    while (frame > 360){
        frame -= 360;
    }
    let b = intToRGB(frame);
    let r = intToRGB(frame * 2);
    let g = intToRGB(frame / 2);
    return `linear-gradient(${frame}deg,hsl(${frame},45%,76%)5%,hsl(${frame},42%,65%)36%,hsl(${frame},75%,35%)87%)`
}

function intToRGB(i) {
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
}

export const rotateGradient = function(cssString, frame){

    return cssString.slice(0,16) + `${frame}deg` + cssString.slice(22)

}