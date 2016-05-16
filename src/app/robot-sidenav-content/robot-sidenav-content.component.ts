import { Component, EventEmitter} from '@angular/core';
import {MdButton} from "@angular2-material/button/button";
import {Output} from "@angular/core/src/metadata";

@Component({
  moduleId: module.id,
  selector: 'robot-sidenav-content',
  templateUrl: 'robot-sidenav-content.component.html',
  styleUrls: ['robot-sidenav-content.component.css'],
  directives: [MdButton],
  outputs: ["selectionEmitter:sidenavSelect"],
})
export class RobotSidenavContentComponent {

  private selectionEmitter: EventEmitter<string> = new EventEmitter();

  navigateTo(componentName: string): void {
    this.selectionEmitter.emit(componentName);
  }
}


