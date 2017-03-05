/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-03T20:40:38+01:00
* @Email:  me@andreeray.se
* @Filename: redux-example.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T16:35:36+01:00
*/



var redux = require('redux'), axios = require('axios'), actions = require('./actions/index'), store = require('./store/configStore').config()

var unsubscribe = store.subscribe(() =>
{
    var state = store.getState()
    if (state.map.isFetching) document.getElementById('app').innerHTML = "loading..."
    else if (state.map.url) document.getElementById('app').innerHTML = "<a target=_blank href='" + state.map.url + "'>View your location</a>"

})

var currentState = store.getState()

store.dispatch(actions.fetchLocation())

store.dispatch(actions.changeName('ray'))
store.dispatch(actions.changeName('Ilona'))
store.dispatch(actions.addHobbie('Electronics'))
store.dispatch(actions.addHobbie('Development'))
store.dispatch(actions.removeHobbie(1))
store.dispatch(actions.addMovie('Star Wars','Sci-Fi'))
store.dispatch(actions.addMovie('Mad Max','Action'))
store.dispatch(actions.removeMovie(1))
