/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-03T20:40:38+01:00
* @Email:  me@andreeray.se
* @Filename: redux-example.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T14:48:44+01:00
*/



var redux = require('redux'), axios = require('axios')

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
var changeName = (name) =>
{
    return {
        type: 'CHANGE_NAME',
        name
    }
}

var nextHobbyId = 0
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
var addHobbie = (hobby) =>
{
    return {
        type: 'ADD_HOBBY',
        hobby
    }
}
var removeHobbie = (id) =>
{
    return {
        type: 'REMOVE_HOBBY',
        id
    }
}
var nextMovieId = 0
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
var addMovie = (title,genre) =>
{
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
}
var removeMovie = (id) =>
{
    return {
        type: 'REMOVE_MOVIE',
        id
    }
}
var mapReducer = (state = {isFetching: false, url: undefined}, action) =>
{
    switch (action.type)
    {
        case 'START_LOCATION_FETCH':
            return {
                isFetching: true,
                url: undefined
            }
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            }
        default:
            return state
    }
}
var startLocationFetch = () => { return { type: 'START_LOCATION_FETCH' } }
var completeLocationFetch = (url) =>
{
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
}
var fetchLocation = () =>
{
    store.dispatch(startLocationFetch())
    axios.get('http://ipinfo.io').then(function (res)
    {
        var loc = res.data.loc
        var baseUrl = 'http://maps.google.com?q='
        store.dispatch(completeLocationFetch(baseUrl+loc))
    })
}
var reducer = redux.combineReducers(
{
    name: nameReducer,
    hobbies: hobbiesReducer,
    movies: moviesReducer,
    map : mapReducer
})
var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f ))
var unsubscribe = store.subscribe(() => {
    var state = store.getState()
    if (state.map.isFetching) document.getElementById('app').innerHTML = "loading..."
    else if (state.map.url) document.getElementById('app').innerHTML = "<a target=_blank href='" + state.map.url + "'>View your location</a>"

})
var currentState = store.getState()

fetchLocation()

store.dispatch(changeName('ray'))
store.dispatch(changeName('Ilona'))
store.dispatch(addHobbie('Electronics'))
store.dispatch(addHobbie('Development'))
store.dispatch(removeHobbie(1))
store.dispatch(addMovie('Star Wars','Sci-Fi'))
store.dispatch(addMovie('Mad Max','Action'))
store.dispatch(removeMovie(1))
