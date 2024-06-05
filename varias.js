//Ejercise
function tournnamentWinner (competitions, result){
    const scores = {};
    let winner = '';

    for(let i = 0; i < competitions.length; i++){
        const [home, away] = competitions[i];
        const winningTeam = result[i] === 0 ? away : home

        scores[winningTeam] = (scores[winningTeam] || 0) + 3

        if(!winner || scores[winningTeam] > scores[winner]){
            winner = winningTeam
        }

    }
    return winner
}

const competitions = [
    ['JavaScript', 'C#'],
    ['C#', 'Python'],
    ['Python', 'JavasScript']
]

const result = [1,0,0]

console.log(tournnamentWinner (competitions, result))
