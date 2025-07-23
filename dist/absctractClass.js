"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // logic
        return 8;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); //required values / calling parent class constructor
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia effect applied");
    }
}
//const obj = new TakePhoto("cam", "smooth"); // ❌ Error: cannot create object of abstract class
const insta = new Instagram("cam", "smooth", 5); // ✅ Allowed
insta.getReelTime();
