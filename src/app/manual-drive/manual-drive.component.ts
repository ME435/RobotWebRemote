import { Component, OnInit,  Inject} from '@angular/core';
import {FirebaseRef} from "angularfire2/angularfire2";
import {MdButton} from "@angular2-material/button/button";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {FirebaseStateService} from "../firebase-state.service";

@Component({
  moduleId: module.id,
  selector: 'app-manual-drive',
  templateUrl: 'manual-drive.component.html',
  styleUrls: ['manual-drive.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton],
})
export class ManualDriveComponent implements OnInit {

  commandsRef: Firebase;

  constructor(private firebaseState: FirebaseStateService) {
    
  }

  ngOnInit() {
    if (this.firebaseState.getRobotRef()) {
      this.commandsRef = this.firebaseState.getRobotRef().child("commands");
    }
  }

}


