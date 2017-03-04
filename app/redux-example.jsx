/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-03-03T20:40:38+01:00
* @Email:  me@andreeray.se
* @Filename: redux-example.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-03-04T02:43:51+01:00
*/



var redux = require('redux')
console.log('starting redux example')

var reducer = (state = {name:'Anonymous'}, action) =>
{
    switch (action.type)
    {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
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
    console.log('name is', state.name)
    document.getElementById('app').innerHTML = state.name
})

var currentState = store.getState()

console.log('currentState', currentState)


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andree'
})


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Ilona'
})

// unsubscribe()
