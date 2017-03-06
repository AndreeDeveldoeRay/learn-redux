/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-06T22:54:36+01:00
*/

var React = require('react'), ReactDOM = require('react-dom'), {Route,Router,IndexRoute,hashHistory} = require('react-router')


ReactDOM.render(
    <p>React - DevelPlate</p>,
    document.getElementById('app')
)

require('./redux.jsx')
