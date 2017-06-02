import { ObservableDemoPage } from './app.po';

describe('observable-demo App', () => {
  let page: ObservableDemoPage;

  beforeEach(() => {
    page = new ObservableDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
