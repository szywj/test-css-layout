import { TestCssPage } from './app.po';

describe('test-css App', () => {
  let page: TestCssPage;

  beforeEach(() => {
    page = new TestCssPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
