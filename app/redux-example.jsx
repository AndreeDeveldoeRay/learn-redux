/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-03T20:40:38+01:00
* @Email:  me@andreeray.se
* @Filename: redux-example.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-04T03:44:10+01:00
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
var nameReducer = (state = 'Anonymous', action) =>
{
    switch (action.type)
    {
        case 'CHANGE_NAME':
            return action.name
        default:
            return state
    }
}
var hobbiesReducer = (state = [], action) =>
{
    switch (action.type)
    {
        case 'ADD_HOBBY':
            return [
                ...state,
                {
                    id: nextHobbyId++,
                    hobby: action.hobby
                }
            ]
        case 'REMOVE_HOBBY':
            return state.filter((hobby) =>  hobby.id !== action.id)
        default:
            return state
    }
}
var moviesReducer = (state = [], action) =>
{
    switch (action.type)
    {
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre
                }
            ]
        case 'REMOVE_MOVIE':
            return state.filter((movie) =>  movie.id !== action.id)
        default:
            return state
    }
}
var reducer = redux.combineReducers(
{
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer
})
var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f ))
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
