import {Component, OnInit} from 'angular2/core';
import {AngularFire} from "angularfire2/angularfire2";

@Component({
  selector: 'robo-monitor',
  templateUrl: 'app/robo-monitor/robo-monitor.component.html',
  styleUrls: ['app/robo-monitor/robo-monitor.component.css']
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
