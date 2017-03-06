/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:53+01:00
* @Email:  me@andreeray.se
* @Filename: configStore.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-03-06T22:45:01+01:00
*/


var redux = require('redux'), thunk = require('redux-thunk').default, {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('reducers')

export var store = () => {
    var reducer = redux.combineReducers(
    {
        name: nameReducer,
        hobbies: hobbiesReducer,
        movies: moviesReducer,
        map : mapReducer
    })

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
    return store
}
