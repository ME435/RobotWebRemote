System.register(['angular2/platform/browser', './app/robot-web-remote'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, robot_web_remote_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (robot_web_remote_1_1) {
                robot_web_remote_1 = robot_web_remote_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(robot_web_remote_1.RobotWebRemoteApp, []);
        }
    }
});
//# sourceMappingURL=app.js.map