/**
* @Author: Andreee "DevelDoe" Ray
* @Date:   2017-02-20T13:54:23+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-03T20:50:07+01:00
*/

var React = require('react'), ReactDOM = require('react-dom'), {Route,Router,IndexRoute,hashHistory} = require('react-router')

ReactDOM.render(
    <p>Boilerplate</p>,
    document.getElementById('app')
)

require('./redux-example.jsx')
