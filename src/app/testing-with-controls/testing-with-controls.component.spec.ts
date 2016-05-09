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
import { TestingWithControlsComponent } from './testing-with-controls.component';

describe('Component: TestingWithControls', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [TestingWithControlsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([TestingWithControlsComponent],
      (component: TestingWithControlsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(TestingWithControlsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(TestingWithControlsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-testing-with-controls></app-testing-with-controls>
  `,
  directives: [TestingWithControlsComponent]
})
class TestingWithControlsComponentTestController {
}

