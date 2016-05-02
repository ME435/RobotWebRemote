import {Component, OnInit, Inject} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {MdButton} from "@angular2-material/button";
import {AngularFire} from "angularfire2/angularfire2";
import {FirebaseRef} from "angularfire2/tokens";

@Component({
  selector: 'robo-commands',
  templateUrl: 'app/robo-commands/robo-commands.component.html',
  styleUrls: ['app/robo-commands/robo-commands.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton]
})
export class RoboCommandsComponent implements OnInit {

  commandsRef: Firebase;

  constructor(@Inject(FirebaseRef) ref: Firebase) {
    // TODO: DOn't hardcode robot name
    this.commandsRef = ref.child("elmo/commands");

  }
  ngOnInit() {
  }

}
