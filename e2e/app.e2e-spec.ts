import { AngulartestDemoPage } from './app.po';

describe('angulartest-demo App', function() {
  let page: AngulartestDemoPage;

  beforeEach(() => {
    page = new AngulartestDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
