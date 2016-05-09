export class RobotWebRemotePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('robot-web-remote-app h1')).getText();
  }
}
