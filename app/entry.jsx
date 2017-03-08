/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T04:09:51+01:00
*/

var React = require('react'), ReactDOM = require('react-dom'), {Route,Router,IndexRoute,hashHistory} = require('react-router'), {Provider} = require('react-redux'), store = require('store').store(), actions = require('actions'), App = require('App')

var unsubscribe = store.subscribe(() =>
{
    console.log('New state: ', store.getState())
})

store.dispatch(actions.changeName('React Implementing Redux'))
store.dispatch(actions.addMovie('Star Wars','Sci-Fi'))
store.dispatch(actions.addMovie('Logan','Action'))
store.dispatch(actions.addMovie('Mad Max','Action'))
store.dispatch(actions.removeMovie(1))
store.dispatch(actions.fetchLocation())

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'))
