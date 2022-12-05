'use strict'

const gProjects = [
    {
        id: 'whats-in-the-picture',
        name: 'What\'s in the Picture',
        title: 'Our first game at the boot camp',
        desc: 'My first time making my own web-app.',
        url: 'https://shakedbar66t.github.io/in-picture/',
        publishedAt: 1670247000000,
        labels: ["Objecs", "Arrays"]
    },
    {
        id: '02',
        name: 'Touch numbers!',
        title: 'Try and be the fastest to finish the game!',
        desc: 'First time using GameInterval',
        url: 'https://shakedbar66t.github.io/touch-nums/',
        publishedAt: 1670247000000,
        labels: ["Matrixes", "Interval"]
    },
    {
        id: '03',
        name: 'Ball-Board',
        title: 'Catch the ball\'s before the catch you!',
        desc: 'First time implementing audio, and using different js\'s for the index',
        url: 'https://shakedbar66t.github.io/ball-board/',
        publishedAt: 1670247000000,
        labels: ["Utility", "Audio"]
    },
    {
        id: '04',
        name: 'Minesweeper',
        title: 'First sprint at the boot camp - The classic Minesweeper!',
        desc: 'Reveal the numbers without touching the bombs!',
        publishedAt: 1670247000000,
        url:'https://shakedbar66t.github.io/mine-sweeper/',
        labels: ["Minesweeper"]
    },
    {
        id: '05',
        name: 'Book-Shop',
        title: 'My mobile book library!',
        desc: 'Store and manage your books by: price, rating etc.',
        publishedAt: 1670247000000,
        url: 'https://shakedbar66t.github.io/book-shop/',
        labels: ["CRUDL", "Library"]
    },
    {
        id: '06',
        name: 'Todo List',
        title: 'Oragnized to-do list, can be sorted by your prefrences!',
        desc: 'Store and manage your to-do list',
        publishedAt: 1670247000000,
        url: 'https://shakedbar66t.github.io/todos/',
        labels: ["Filter", "CRUDL"]
        
    }
]

function getProjects(){
    return gProjects
}

function getProjectById(projectId){
    console.log(projectId);
    const project = gProjects.find(project => projectId === project.id)
    return project
}