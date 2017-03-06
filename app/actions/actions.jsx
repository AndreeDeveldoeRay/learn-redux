/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-03-05T16:09:24+01:00
* @Email:  me@andreeray.se
* @Filename: index.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-03-06T22:18:09+01:00
*/

var axios = require('axios')

export var changeName = (name) =>
{
    return {
        type: 'CHANGE_NAME',
        name
    }
}
export var addHobbie = (hobby) =>
{
    return {
        type: 'ADD_HOBBY',
        hobby
    }
}
export var removeHobbie = (id) =>
{
    return {
        type: 'REMOVE_HOBBY',
        id
    }
}
export var addMovie = (title,genre) =>
{
    return {
        type: 'ADD_MOVIE',
        title,
        genre
    }
}
export var removeMovie = (id) =>
{
    return {
        type: 'REMOVE_MOVIE',
        id
    }
}
export var startLocationFetch = () =>
{
    return {
        type: 'START_LOCATION_FETCH'
    }
}
export var completeLocationFetch = (url) =>
{
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
}
export var fetchLocation = () =>
{
    return (dispatch, getState) =>
    {
        dispatch(startLocationFetch())
        axios.get('http://ipinfo.io').then(function (res)
        {
            var loc = res.data.loc
            var baseUrl = 'http://maps.google.com?q='
            dispatch(completeLocationFetch(baseUrl+loc))
        })
    }
}
