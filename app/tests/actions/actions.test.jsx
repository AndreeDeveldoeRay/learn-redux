/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-07T01:49:56+01:00
* @Email:  me@andreeray.se
* @Filename: actions.test.jsx
* @Last modified by:   develdoe
* @Last modified time: 2017-03-07T02:06:52+01:00
*/

var Expect = require('expect'), Actions = require('actions')

describe('Redux Actions', () => {
    it('changeName', () => {
        var action = {
            type: 'CHANGE_NAME',
            name: 'Andree'
        }
        var res = Actions.changeName(action.name)
        Expect(res).toEqual(action)
    })
    it('addMovie', () => {
        var action = {
            type: 'ADD_MOVIE',
            title: 'test',
            genre: 'test'
        }
        var res = Actions.addMovie(action.title, action.genre)
        Expect(res).toEqual(action)
    })
    it('removeMovie', () => {
        var action = {
            type: 'REMOVE_MOVIE',
            id: 0
        }
        var res = Actions.removeMovie(action.id)
        Expect(res).toEqual(action)
    })
    it('startLocationFetch', () => {
        var action = {
            type: 'START_LOCATION_FETCH'
        }
        var res = Actions.startLocationFetch()
        Expect(res).toEqual(action)
    })
    it('completeLocationFetch', () => {
        var action = {
            type: 'COMPLETE_LOCATION_FETCH',
            url: 'test'
        }
        var res = Actions.completeLocationFetch(action.url)
        Expect(res).toEqual(action)
    })
})
