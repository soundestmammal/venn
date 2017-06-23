import { VennPage } from './app.po';

describe('venn App', () => {
  let page: VennPage;

  beforeEach(() => {
    page = new VennPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
