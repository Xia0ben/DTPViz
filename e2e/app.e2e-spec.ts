import { DTPVizPage } from './app.po';

describe('dtpviz App', function() {
  let page: DTPVizPage;

  beforeEach(() => {
    page = new DTPVizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
