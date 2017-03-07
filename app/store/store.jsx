/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:53+01:00
* @Email:  me@andreeray.se
* @Filename: configStore.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-07T03:35:12+01:00
*/


var redux = require('redux'), thunk = require('redux-thunk').default, {nameReducer, moviesReducer, mapReducer} = require('reducers')

export var store = () => {
    var reducer = redux.combineReducers(
    {
        name: nameReducer,
        movies: moviesReducer,
        map : mapReducer
    })

    var store = redux.createStore(reducer, redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ))
    return store
}
