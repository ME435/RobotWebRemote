import { Component, OnInit,  Inject} from '@angular/core';
import {FirebaseRef} from "angularfire2/angularfire2";
import {MdButton} from "@angular2-material/button/button";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";

@Component({
  moduleId: module.id,
  selector: 'app-manual-drive',
  templateUrl: 'manual-drive.component.html',
  styleUrls: ['manual-drive.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton],
})
export class ManualDriveComponent implements OnInit {

  commandsRef: Firebase;

  constructor(@Inject(FirebaseRef) ref: Firebase) {
    // TODO: DOn't hardcode robot name
    this.commandsRef = ref.child("elmo/commands");
  }

  ngOnInit() {
  }

}


