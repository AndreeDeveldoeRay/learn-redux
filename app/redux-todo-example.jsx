/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-03T22:15:33+01:00
* @Email:  me@andreeray.se
* @Filename: redux-todo-example.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-03-04T02:51:45+01:00
*/



var redux = require('redux')
console.log('starting redux example')
var stateDefault =
{
    search: '',
    showCompleted: false,
    todos: []
}
var reducer = (state = stateDefault, action) =>
{
    switch(action.type)
    {
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                search: action.search
            }
        default:
            return state
    }
    return state
}
var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f => f ))
var unsubscribe = store.subscribe(() =>
{
    var state = store.getState()
    document.getElementById('app').innerHTML = state.search
})
store.dispatch(
{
    type: 'CHANGE_SEARCH_TEXT',
    search: 'test'
})
store.dispatch(
{
    type: 'CHANGE_SEARCH_TEXT',
    search: 'second test'
})
