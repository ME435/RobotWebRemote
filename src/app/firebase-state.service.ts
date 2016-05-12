import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseStateService {

  public robotRef : Firebase;

  constructor() {

  }

  getRobotRef() {
    if (!this.robotRef) {
      // Create the robot ref using the last saved values.  Important for testing reloads!
      let firebaseUrl = this.getSavedFirebaseUrl();
      let robotName = this.getSavedRobotName();
      if (firebaseUrl && robotName) {
        this.setFirebasePath(firebaseUrl, robotName, false)
      }
    }
    return this.robotRef;
  }

  getSavedFirebaseUrl() : string {
    return localStorage.getItem("firebaseUrl");
  }

  getSavedRobotName() : string {
    return localStorage.getItem("robotName");
  }

  setFirebasePath(firebaseUrl: string, robotName: string, updateLocalStorage: boolean) {
    let path = "https://" + firebaseUrl + ".firebaseio.com/" + robotName;
    console.log("Seting the ref path to " + path);
    this.robotRef = new Firebase(path);
    if (updateLocalStorage) {
      localStorage.setItem("firebaseUrl", firebaseUrl);
      localStorage.setItem("robotName", robotName);
    }
  }
}
