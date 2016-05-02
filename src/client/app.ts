import {bootstrap} from 'angular2/platform/browser';
import {RobotWebRemoteApp} from './app/robot-web-remote';
import {ROUTER_PROVIDERS} from "angular2/router";
import {FIREBASE_PROVIDERS, defaultFirebase} from "angularfire2/angularfire2";

bootstrap(RobotWebRemoteApp, [
  FIREBASE_PROVIDERS,
  defaultFirebase("https://fisherds-robotwebremote.firebaseio.com"),
  ROUTER_PROVIDERS,
]);
