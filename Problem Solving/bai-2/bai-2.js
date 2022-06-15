var arr = [
    {
        name: 'Arsenal',
        points: 99,
        GD: 45
    },
    {
        name: 'Chelsea',
        points: 75,
        GD: 39
    },
    {
        name: 'manchester united',
        points: 69,
        GD: 29
    },
    {
        name: 'Liverpool',
        points: 88,
        GD: 39
    },
    {
        name: 'Everton',
        points: 69,
        GD: 39
    },
    {
        name: 'Bsenal',
        points: 99,
        GD: 45
    },

]

arr.sort(function(a, b) {
    return b.points - a.points;
})
arr.sort(function(a, b) {
    return b.GD - a.GD;
})
arr.sort(function(a, b) {
    return b.name- a.name;
})
console.log(arr)