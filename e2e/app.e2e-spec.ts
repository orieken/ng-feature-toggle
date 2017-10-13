import { NgFeatureTogglePage } from './app.po';

describe('ng-feature-toggle App', () => {
  let page: NgFeatureTogglePage;

  beforeEach(() => {
    page = new NgFeatureTogglePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
