import {Component, AfterViewInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig, Router} from '@angular/router-deprecated';
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav/sidenav";
import {ManualDriveComponent} from "./manual-drive/manual-drive.component";
import {TestingWithControlsComponent} from "./testing-with-controls/testing-with-controls.component";
import {MdButton} from "@angular2-material/button/button";
import {MdToolbar} from "@angular2-material/toolbar/toolbar";
import {MdSidenav} from "@angular2-material/sidenav/sidenav";
import {CompetitionControllerComponent} from "./competition-controller/competition-controller.component";
import {ObserveOnlyComponent} from "./observe-only/observe-only.component";
import {RobotParamsComponent} from "./robot-params/robot-params.component";
import {SetFirebasePathComponent} from "./set-firebase-path/set-firebase-path.component";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {FirebaseStateService} from "./firebase-state.service";
import {RobotSidenavContentComponent} from "./robot-sidenav-content/robot-sidenav-content.component";
import {ViewChild} from "@angular/core/src/metadata";

@Component({
  moduleId: module.id,
  providers: [ROUTER_PROVIDERS, FirebaseStateService],
  selector: 'robot-web-remote-app',
  templateUrl: 'robot-web-remote.component.html',
  styleUrls: ['robot-web-remote.component.css'],
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_CARD_DIRECTIVES, MdButton, MdToolbar, RobotSidenavContentComponent],
  pipes: []
})
@RouteConfig([
  {path: '/', name: "Root", redirectTo: ["/SetFirebasePath"]},
  {path: '/path', name: "SetFirebasePath", component: SetFirebasePathComponent},
  {path: '/observe', name: "ObserveOnly", component: ObserveOnlyComponent},
  {path: '/manualdrive', name: "ManualDrive", component: ManualDriveComponent},
  {path: '/testing', name: "TestingWithControls", component: TestingWithControlsComponent},
  {path: '/competition', name: "CompetitionController", component: CompetitionControllerComponent},
  {path: '/params', name: "RobotParams", component: RobotParamsComponent},
])
export class RobotWebRemoteAppComponent implements AfterViewInit {
  @ViewChild(MdSidenav) mdSidenav:MdSidenav;

  constructor(private router:Router, firebaseState: FirebaseStateService) {
    firebaseState.firebaseUrlChangeEmitter.subscribe((path) => {
      this.mdSidenav.open();
      this.router.navigate(["RobotParams"]);
    });
  }

  ngAfterViewInit() {
    console.log(this.mdSidenav);
    // Shown as a reminder that mdSidenav isn't available in constructor or ngOnInit
  }

  handleSidenavSelect(componentName) {
    this.mdSidenav.close();
    this.router.navigate([componentName]);
  }
}
