import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { SetFirebasePathComponent } from './set-firebase-path.component';

describe('Component: SetFirebasePath', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [SetFirebasePathComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([SetFirebasePathComponent],
      (component: SetFirebasePathComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(SetFirebasePathComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(SetFirebasePathComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-set-firebase-path></app-set-firebase-path>
  `,
  directives: [SetFirebasePathComponent]
})
class SetFirebasePathComponentTestController {
}

