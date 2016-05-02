import {Component, OnInit} from 'angular2/core';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {MdButton} from "@angular2-material/button";

@Component({
  selector: 'robo-commands',
  templateUrl: 'app/robo-commands/robo-commands.component.html',
  styleUrls: ['app/robo-commands/robo-commands.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton]
})
export class RoboCommandsComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {
  }

}
