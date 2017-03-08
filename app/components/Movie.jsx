/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T04:01:27+01:00
* @Email:  me@andreeray.se
* @Filename: Movie.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T04:15:29+01:00
*/



var React = require('react'), {connect} = require('react-redux')

var Movie = React.createClass({
    render: function () {
        var {title} = this.props
        return (
            <li>{title}</li>
        )
    }
})
module.exports = connect()(Movie)
