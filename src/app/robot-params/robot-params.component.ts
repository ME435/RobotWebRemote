import { Component, OnInit } from '@angular/core';
import {FirebaseStateService} from "../firebase-state.service";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";

@Component({
  moduleId: module.id,
  selector: 'app-robot-params',
  templateUrl: 'robot-params.component.html',
  styleUrls: ['robot-params.component.css'],
  directives: [MD_CARD_DIRECTIVES],
})
export class RobotParamsComponent implements OnInit {

  private params: any;

  constructor(private firebaseState: FirebaseStateService) {

  }

  ngOnInit() {
    let this_ = this;  // I bet this hack wouldn't be necessary if using AngularFire!

    if (this.firebaseState.getRobotRef()) {
      this.firebaseState.getRobotRef().child("params").on("value", function(snapshot) {
        console.log("Params snapshot received");
        console.log(snapshot.val());
        this_.params = snapshot.val();
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    }
  }
}
