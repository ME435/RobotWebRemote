import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {CliRouteConfig} from './route-config';
import {AngularFire, FirebaseObjectObservable} from "angularfire2/angularfire2";

@Component({
  selector: 'robot-web-remote-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'app/robot-web-remote.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([

].concat(CliRouteConfig))

export class RobotWebRemoteApp {
  monitorStream: FirebaseObjectObservable<any>;
  monitor: any;

  // TODO: add commands and params

  constructor(private af: AngularFire) {
    this.monitorStream = af.object("/elmo/monitor");
    this.monitorStream.subscribe((monitor) => {
      this.monitor = monitor;
      console.log(monitor);

    } )
  }

}
