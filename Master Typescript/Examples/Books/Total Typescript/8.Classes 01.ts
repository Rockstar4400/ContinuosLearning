// Adding a constructor
class Album {
  title;
  artist;
  releaseYear;

  constructor() {
    this.title = "Loop Finding Jazz Records";
    this.artist = "Jan Jelinek";
    this.releaseYear = 2001;
  }
}

const loopFindingJazzRecords = new Album();
// Output: Loop Finding Jazz Records
console.log(loopFindingJazzRecords.title); 

// Adding Arguments to the constructor
class AlbumObj {
  title;
  artist;
  releaseYear;

  constructor(opts: {
    title: string, 
    artist: string, 
    releaseYear: number}) {
    this.title = opts.title,
    this.artist = opts.artist,
    this.releaseYear = opts.releaseYear
  }
}

// Now, when you create a new instance of the Album class,
// you can pass an object with the properties you want to set
const loopRecords = new AlbumObj({
  title: "Loop Finding Jazz Records",
  artist: "Jan Jelinek",
  releaseYear: 2001,
});

console.log(loopRecords.title); // Output: Loop Finding Jazz Records

// Using a class as a Type
function printAlbumInfo(album: Album) {
  console.log(
    `${album.title} by ${album.artist}, 
    released in ${album.releaseYear}.`,
  );
}

printAlbumInfo(loopRecords);



