/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-03-03T20:40:38+01:00
* @Email:  me@andreeray.se
* @Filename: redux-example.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-03T22:10:51+01:00
*/



var redux = require('redux')

console.log('starting redux example')

var reducer = (state = {name:'Anonymous'} ,action) =>
{
    return state
}

var store = redux.createStore(reducer)

var currentState = store.getState()

console.log('currentState', currentState)
