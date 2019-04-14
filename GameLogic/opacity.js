export const fadeIn = function(r,g,b,frame){
    return `rgba(${r},${g},${b},${Math.min(frame * 0.005, 1)})`
}
export const elementFadeIn = function(frame){
    return Math.min(frame * 0.005, 1)
}