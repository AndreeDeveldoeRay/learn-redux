/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-03-03T22:31:32+01:00
*/

var React = require('react'), ReactDOM = require('react-dom'), {Route,Router,IndexRoute,hashHistory} = require('react-router')

require('style!css!sass!styles')

ReactDOM.render(
    <p>Boilerplate</p>,
    document.getElementById('app')
)

require('./redux-todo-example.jsx')
