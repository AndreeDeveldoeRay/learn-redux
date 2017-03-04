/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-03-03T20:40:38+01:00
* @Email:  me@andreeray.se
* @Filename: redux-example.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-03-04T03:21:41+01:00
*/


console.log('starting redux example')
var redux = require('redux')
var stateDefault =
{
    name:'Anonymous',
    hobbies: [],
    movies: []
}
var nextHobbyId = 0,
    nextMovieId = 0
var reducer = (state = stateDefault, action) =>
{
    switch (action.type)
    {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            }
        case 'ADD_HOBBY':
            return {
                ...state,
                hobbies: [
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby
                    }
                ]
            }
        case 'REMOVE_HOBBY':
            return {
                ...state,
                hobbies: state.hobbies.filter((hobby) =>  hobby.id !== action.id)
            }
        case 'ADD_MOVIE':
            return {
                ...state,
                movies: [
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            }
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
            }
        default:
            return state
    }
}

var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f ))

// subscribe to changes
var unsubscribe = store.subscribe(() =>
{
    var state = store.getState()
    document.getElementById('app').innerHTML = state
    console.log('New State',store.getState())
})

var currentState = store.getState()

console.log('currentState', currentState)


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andree'
})

store.dispatch(
{
    type: 'ADD_HOBBY',
    hobby: 'Running'
})
store.dispatch(
{
    type: 'ADD_HOBBY',
    hobby: 'Walking'
})
store.dispatch(
{
    type: 'REMOVE_HOBBY',
    id: 1
})
store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Ilona'
})

store.dispatch(
{
    type: 'ADD_MOVIE',
    title: 'Star Wars',
    genre: 'Sci-fi'
})
store.dispatch(
{
    type: 'ADD_MOVIE',
    title: 'Mad Max',
    genre: 'Action'
})
store.dispatch(
{
    type: 'REMOVE_MOVIE',
    id: 1
})
// unsubscribe()
