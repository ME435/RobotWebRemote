import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {AngularFire, FirebaseObjectObservable} from "angularfire2/angularfire2";
import {RoboMonitorComponent} from "./robo-monitor/robo-monitor.component";
import {RoboCommandsComponent} from "./robo-commands/robo-commands.component";

@Component({
  selector: 'robot-web-remote-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/robot-web-remote.html',
  styleUrls: ["app/robot-web-remote.css"],
  directives: [ROUTER_DIRECTIVES, RoboCommandsComponent, RoboMonitorComponent],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class RobotWebRemoteApp {
  params: any;
  commands: any;
  // TODO: add commands and params


}
