
// Class property initializers
// Readonly class properties
// Optional class properties
// public and private properties
class AlbumIni {
    title = "Unknown Album";
    readonly artist = "Unknown Artist";
    public releaseYear? = 0;
    private rating = 0;
    #price = 0;
}

// @ts-ignore
// directive tells TypeScript to ignore any errors that might
// happen on the following line
console.log(AlbumIni.#price); // Output: 0

// Class methods

class MyClass {
  location = "Class";

  arrow = () => {
    console.log("arrow", this);
  };

  method() {
    console.log("method", this);
  }
}

const myObj = {
  location: "Object",
  arrow: new MyClass().arrow,
  method: new MyClass().method,
};

myObj.arrow(); // {location: 'Class'}
myObj.method(); // {location: 'Object'}

// Class Inheritance

class AlbumBase {
  title: string;
  artist: string;
  releaseYear: number;

  constructor(opts: {
    title: string; artist: 
    string; releaseYear: number}) {
    this.title = opts.title;
    this.artist = opts.artist;
    this.releaseYear = opts.releaseYear;
  }

  displayInfo() {
    console.log(
      `${this.title} by ${this.artist}, 
      released in ${this.releaseYear}.`,
    );
  }
}

// protected properties
class SpecialEditionAlbum extends AlbumBase{
    protected bonusTrack: string[];
    constructor(opts: {
        title: string;
        artist: string;
        releaseYear: number;
        bonusTracks: string[];
    }){
        super (opts);
        this.bonusTrack = opts.bonusTracks;
    }
}