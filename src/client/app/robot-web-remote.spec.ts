import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {RobotWebRemoteApp} from '../app/robot-web-remote';

beforeEachProviders(() => [RobotWebRemoteApp]);

describe('App: RobotWebRemote', () => {
  it('should have the `defaultMeaning` as 42', inject([RobotWebRemoteApp], (app: RobotWebRemoteApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([RobotWebRemoteApp], (app: RobotWebRemoteApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

