import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { RobotWebRemoteAppComponent, environment } from './app/';
import {FIREBASE_PROVIDERS, defaultFirebase} from "angularfire2/angularfire2";

if (environment.production) {
  enableProdMode();
}

bootstrap(RobotWebRemoteAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase("https://fisherds-robotwebremote.firebaseio.com")
]);
