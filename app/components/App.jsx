/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-08T03:39:38+01:00
* @Email:  me@andreeray.se
* @Filename: App.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-08T04:14:19+01:00
*/



var React = require('react'), {connect} = require('react-redux'), Movie = require('Movie')

var App = React.createClass({
    render: function () {
        var {name,movies,map} = this.props
        var renderMovies = () => {
            return movies.map((movie) => {
                return (
                    <Movie key={movie.id} {...movie} />
                )
            })
        }
        return (<div>
            <ul>
                <li>name: {name}</li>
                {renderMovies()}
                <li>{map.url}</li>
            </ul>
        </div>)
    }
})
module.exports = connect(
    (state) => {
        return {
            name: state.name,
            movies: state.movies,
            map: state.map
        }
    }
)(App)
