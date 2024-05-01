// Question 40: Album: Create objects for music albums.
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("atif aslam", "Jab koi baat");
var album2 = make_album("Sajjad Ali", "Sahil p khary hoon");
var album3 = make_album("Rahat Fateh Ali khan", "Afreen", 22);
console.log(album1);
console.log(album2);
console.log(album3);
