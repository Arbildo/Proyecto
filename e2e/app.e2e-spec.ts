import { MusicaPage } from './app.po';

describe('musica App', function() {
  let page: MusicaPage;

  beforeEach(() => {
    page = new MusicaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
