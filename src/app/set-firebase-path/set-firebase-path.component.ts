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
    // TODO: Use localstorage values if present.
  }

  handleSet() {
    this.firebaseState.setFirebasePath(this.firebaseUrl, this.robotName);
  }


}
