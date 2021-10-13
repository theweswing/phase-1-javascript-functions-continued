// Your code here
function saturdayFun(activity = "roller-skate",){
   return(`This Saturday, I want to ${activity}!`)
}

function mondayWork(assignment = `go to the office`,){
    return (`This Monday, I will ${assignment}.`)
}

function wrapAdjective(flair = "*",){
    return function(adjective="special",){
        return `You are ${flair}${adjective}${flair}!`
    }
}