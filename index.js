// code your solution here\
function saturdayFun(funEvent = 'roller-skate') {
    return `This Saturday, I want to ${funEvent}!`
}

function mondayWork (task = 'go to the office') {
    return `This Monday, I will ${task}.`
}


function wrapAdjective (special = '*') {
 return function(title = '||') {
   return `You are ${special}${title}${special}!`
 }

}