// Question 40: Album: Create objects for music albums.

interface Album {
    artist: string;
    title: string;
    tracks?: number;
}
function make_album(artist:string , title:string,tracks?:number):Album {
    let album: Album = {artist:artist, title:title}
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
let album1 = make_album ("atif aslam","Jab koi baat");
let album2 = make_album ("Sajjad Ali","Sahil p khary hoon");
let album3 = make_album ("Rahat Fateh Ali khan","Afreen",22);

console.log(album1);
console.log(album2);
console.log(album3);

