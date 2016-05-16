import { Component, EventEmitter} from '@angular/core';
import {MdButton} from "@angular2-material/button/button";
import {Output} from "@angular/core/src/metadata";

@Component({
  moduleId: module.id,
  selector: 'robot-sidenav-content',
  templateUrl: 'robot-sidenav-content.component.html',
  styleUrls: ['robot-sidenav-content.component.css'],
  directives: [MdButton],
  outputs: ["sidenavSelect"],
})
export class RobotSidenavContentComponent {

  private sidenavSelect: EventEmitter<string> = new EventEmitter();

  navigateTo(componentName: string): void {
    this.sidenavSelect.emit(componentName);
  }
}


