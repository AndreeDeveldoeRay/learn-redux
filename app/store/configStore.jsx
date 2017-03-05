/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:53+01:00
* @Email:  me@andreeray.se
* @Filename: configStore.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T16:37:36+01:00
*/


var redux = require('redux'), thunk = require('redux-thunk').default, {nameReducer, hobbiesReducer, moviesReducer, mapReducer} = require('./../reducers/index.jsx')

export var config = () => {
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
