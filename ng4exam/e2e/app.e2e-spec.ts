import { Ng4examPage } from './app.po';

describe('ng4exam App', () => {
  let page: Ng4examPage;

  beforeEach(() => {
    page = new Ng4examPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
