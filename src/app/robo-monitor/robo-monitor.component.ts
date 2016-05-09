import {AngularFire} from "angularfire2/angularfire2";
import {OnInit, Component} from "@angular/core";
//import {MD_CARD_DIRECTIVES} from "@angular2-material/card";
//import {MdButton} from "@angular2-material/button";

@Component({
  selector: 'robo-monitor',
  templateUrl: 'app/robo-monitor/robo-monitor.component.html',
  styleUrls: ['app/robo-monitor/robo-monitor.component.css'],
  //directives: [MD_CARD_DIRECTIVES, MdButton],
})
export class RoboMonitorComponent implements OnInit {

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
