System.register(['angular2/testing', '../app/robot-web-remote'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, robot_web_remote_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (robot_web_remote_1_1) {
                robot_web_remote_1 = robot_web_remote_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [robot_web_remote_1.RobotWebRemoteApp]; });
            testing_1.describe('App: RobotWebRemote', function () {
                testing_1.it('should have the `defaultMeaning` as 42', testing_1.inject([robot_web_remote_1.RobotWebRemoteApp], function (app) {
                    testing_1.expect(app.defaultMeaning).toBe(42);
                }));
                testing_1.describe('#meaningOfLife', function () {
                    testing_1.it('should get the meaning of life', testing_1.inject([robot_web_remote_1.RobotWebRemoteApp], function (app) {
                        testing_1.expect(app.meaningOfLife()).toBe('The meaning of life is 42');
                        testing_1.expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
                    }));
                });
            });
        }
    }
});
//# sourceMappingURL=robot-web-remote.spec.js.map