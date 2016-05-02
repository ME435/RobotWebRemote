System.register(['angular2/platform/browser', './app/robot-web-remote', "angular2/router", "angularfire2/angularfire2"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, robot_web_remote_1, router_1, angularfire2_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (robot_web_remote_1_1) {
                robot_web_remote_1 = robot_web_remote_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(robot_web_remote_1.RobotWebRemoteApp, [
                angularfire2_1.FIREBASE_PROVIDERS,
                angularfire2_1.defaultFirebase("https://fisherds-robotwebremote.firebaseio.com"),
                router_1.ROUTER_PROVIDERS,
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map