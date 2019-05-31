var randomObject = {a:1, b:5, c:7}
randomObject.d = 42

delete randomObject.d

for(var property in randomObject){
    console.log(property)
    console.log(randomObject[property])
    console.log(randomObject['a'])
}

library.tracks.t123.name
library['tracks']['t123']['name']

library.tracks[trackId].name

var listOfTracks = library.tracks
var specificTrack = listOfTracks[trackId]
var name = specificTrack.name

