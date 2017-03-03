/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-03T22:15:33+01:00
* @Email:  me@andreeray.se
* @Filename: redux-todo-example.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-03-03T22:31:26+01:00
*/



var redux = require('redux')

console.log('starting redux example')

var stateDefault = {
    search: '',
    showCompleted: false,
    todos: []
}
var reducer = (state = stateDefault, action) =>
{
    return state
}

var store = redux.createStore(reducer)

console.log('currentState', store.getState())
