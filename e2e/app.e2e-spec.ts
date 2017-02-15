import { NgClapPage } from './app.po';

describe('ng-clap App', function() {
  let page: NgClapPage;

  beforeEach(() => {
    page = new NgClapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
