import { Component, OnInit} from '@angular/core';
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

  constructor(private firebaseState: FirebaseStateService) {
  }

  ngOnInit() {
    // Attempt to update the boxes with the last saved values.
    let firebaseUrl = this.firebaseState.getSavedFirebaseUrl();
    let robotName = this.firebaseState.getSavedRobotName();
    if (firebaseUrl && robotName) {
      this.firebaseUrl = firebaseUrl;
      this.robotName = robotName;
    }
  }

  handleSet() {
    this.firebaseState.setFirebasePath(this.firebaseUrl, this.robotName, true);
  }
}
