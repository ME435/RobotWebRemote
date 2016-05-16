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
  private gpsInfo: string;
  private orientation: string;

  constructor(private firebaseState: FirebaseStateService) {
  }

  ngOnInit() {
    let this_ = this;  // I bet this hack wouldn't be necessary if using AngularFire!

    if (this.firebaseState.getRobotRef()) {
      this.firebaseState.getRobotRef().child("monitor").on("value", function(snapshot) {
          console.log("Monitor snapshot received");
          console.log(snapshot.val());
        this_.monitor = snapshot.val();
        let m = this_.monitor;
        var gpsHeading = " ?°";
        if (m.gps.gpsHeading <= 180.0 && m.gps.gpsHeading > -180.0) {
          gpsHeading = ` ${Math.round(m.gps.gpsHeading)}°`;
        }
        this_.orientation = ` ${Math.round(m.orientation.sensorHeading)}°`;
        this_.gpsInfo = `(${m.gps.x},${m.gps.y}) ${gpsHeading} ${m.gps.headingCount}/${m.gps.totalCount}`;
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });
    }
  }
}
