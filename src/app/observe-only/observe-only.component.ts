import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {MdButton} from "@angular2-material/button";
import {FirebaseStateService} from "../firebase-state.service";

@Component({
  moduleId: module.id,
  selector: 'app-observe-only',
  templateUrl: 'observe-only.component.html',
  styleUrls: ['observe-only.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton],
})
export class ObserveOnlyComponent implements OnInit {

  private monitor: any;

  constructor(public firebaseState: FirebaseStateService) {

  }

  ngOnInit() {
    let this_ = this;  // I bet this hack wouldn't be necessary if using AngularFire!

    if (this.firebaseState.getRobotRef()) {
      this.firebaseState.getRobotRef().child("monitor").on("value", function(snapshot) {
          console.log("Snapshot received");
          console.log(snapshot.val());
        this_.monitor = snapshot.val();
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    }
  }

}
