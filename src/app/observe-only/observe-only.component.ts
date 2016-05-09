import { Component, OnInit } from '@angular/core';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
import {MdButton} from "@angular2-material/button";
import {AngularFire} from "angularfire2/angularfire2";

@Component({
  moduleId: module.id,
  selector: 'app-observe-only',
  templateUrl: 'observe-only.component.html',
  styleUrls: ['observe-only.component.css'],
  directives: [MD_CARD_DIRECTIVES, MdButton],
})
export class ObserveOnlyComponent implements OnInit {

  private monitor: any;

  constructor(private af: AngularFire) {
    let monitorStream = af.object("/elmo/monitor");
    monitorStream.subscribe((monitor) => {
      this.monitor = monitor;
      console.log(monitor);

    } )
  }

  ngOnInit() {
  }

}
