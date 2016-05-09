import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {AngularFire, FirebaseObjectObservable} from "angularfire2/angularfire2";
import {RoboMonitorComponent} from "./robo-monitor/robo-monitor.component";
import {RoboCommandsComponent} from "./robo-commands/robo-commands.component";


@Component({
  moduleId: module.id,
  providers: [ROUTER_PROVIDERS],
  selector: 'robot-web-remote-app',
  templateUrl: 'robot-web-remote.component.html',
  styleUrls: ['robot-web-remote.component.css'],
  directives: [ROUTER_DIRECTIVES, RoboCommandsComponent, RoboMonitorComponent],
  pipes: []
})
export class RobotWebRemoteAppComponent {
  title = 'robot-web-remote works!';
}
