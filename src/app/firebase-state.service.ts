import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseStateService {

  public firebaseUrl = "fisherds-robotwebremote";
  public robotName = "elmo";
  public robotRef : Firebase;

  constructor() {
    
  }
  
  getRobotRef() {
    if (!this.robotRef) {
      // TODO: Create the robot ref using the last saved values
      
    }
    return this.robotRef;
  }

  setFirebasePath(firebaseUrl, robotName) {
    let path = "https://" + this.firebaseUrl + ".firebaseio.com/" + this.robotName;
    console.log("Seting the ref path to " + path);
    this.robotRef = new Firebase(path);
  }
}
