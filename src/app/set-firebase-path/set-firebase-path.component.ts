import { Component, OnInit, EventEmitter } from '@angular/core';
import {MdInput} from "@angular2-material/input/input";
import {MdButton} from "@angular2-material/button/button";
import {FirebaseStateService} from "../firebase-state.service";

@Component({
  moduleId: module.id,
  selector: 'app-set-firebase-path',
  templateUrl: 'set-firebase-path.component.html',
  styleUrls: ['set-firebase-path.component.css'],
  directives: [MdInput, MdButton],
})
export class SetFirebasePathComponent implements OnInit {

  private firebaseUrl = "fisherds-robotwebremote";
  private robotName = "elmo";

  constructor(public firebaseState: FirebaseStateService) {

  }

  ngOnInit() {
    // Attempt to update the boxes with the last saved values.
    let firebaseUrl = this.firebaseState.getSavedFirebaseUrl();
    let robotName = this.firebaseState.getSavedRobotName();
    if (firebaseUrl && robotName) {
      this.firebaseUrl = firebaseUrl;
      this.robotName = robotName;
      this.firebaseState.setFirebasePath(firebaseUrl, robotName, false)
    }
  }

  handleSet() {
    this.firebaseState.setFirebasePath(this.firebaseUrl, this.robotName, true);

    // TODO: Open the params remote and open the drawer.

    // This was a disaster BTW.  Don't do it this way. :)
    // let sidenav : any = window.document.querySelector("md-sidenav");
    // sidenav.classList.remove("md-sidenav-closed");
    // sidenav.classList.add("md-sidenav-opened");
  }

}
