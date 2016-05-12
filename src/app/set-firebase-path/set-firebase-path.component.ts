import { Component, OnInit, EventEmitter } from '@angular/core';
import {MdInput} from "@angular2-material/input/input";
import {MdButton} from "@angular2-material/button/button";

@Component({
  moduleId: module.id,
  selector: 'app-set-firebase-path',
  templateUrl: 'set-firebase-path.component.html',
  styleUrls: ['set-firebase-path.component.css'],
  directives: [MdInput, MdButton],
  outputs: ["setFirebaseUrl"],
})
export class SetFirebasePathComponent implements OnInit {

  private firebaseUrl = "fisherds-robotwebremote";
  private robotName = "elmo";
  private setFirebasePath : EventEmitter<string>;

  constructor() {
    this.setFirebasePath = new EventEmitter();
  }

  ngOnInit() {
    // TODO: Use localstorage values if present.
  }

  handleSet() {
    let path = "https://" + this.firebaseUrl + ".firebaseio.com/" + this.robotName;
    this.setFirebasePath.emit(path);
    console.log("Just did an emit of " + path);
  }


}
