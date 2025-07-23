abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string
  ) {}

  abstract getSepia(): void;

  getReelTime(): number {
    // logic
    return 8;
  }
}


class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);  //required values / calling parent class constructor
  }

  getSepia(): void {
    console.log("Sepia effect applied");
  }
}


//const obj = new TakePhoto("cam", "smooth"); // ❌ Error: cannot create object of abstract class

const insta = new Instagram("cam", "smooth", 5); // ✅ Allowed
insta.getReelTime();



export {}