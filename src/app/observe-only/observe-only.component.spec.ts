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
import { ObserveOnlyComponent } from './observe-only.component';

describe('Component: ObserveOnly', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ObserveOnlyComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ObserveOnlyComponent],
      (component: ObserveOnlyComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ObserveOnlyComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ObserveOnlyComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-observe-only></app-observe-only>
  `,
  directives: [ObserveOnlyComponent]
})
class ObserveOnlyComponentTestController {
}

