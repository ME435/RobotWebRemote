import { RobotWebRemotePage } from './app.po';

describe('robot-web-remote App', function() {
  let page: RobotWebRemotePage;

  beforeEach(() => {
    page = new RobotWebRemotePage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('robot-web-remote works!');
  });
});
