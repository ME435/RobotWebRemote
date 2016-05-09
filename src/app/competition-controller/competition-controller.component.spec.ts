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
import { CompetitionControllerComponent } from './competition-controller.component';

describe('Component: CompetitionController', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [CompetitionControllerComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([CompetitionControllerComponent],
      (component: CompetitionControllerComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(CompetitionControllerComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(CompetitionControllerComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-competition-controller></app-competition-controller>
  `,
  directives: [CompetitionControllerComponent]
})
class CompetitionControllerComponentTestController {
}

