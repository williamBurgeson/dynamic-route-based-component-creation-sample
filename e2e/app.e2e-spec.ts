import { DynamicRouteBasedComponentCreationSamplePage } from './app.po';

describe('dynamic-route-based-component-creation-sample App', () => {
  let page: DynamicRouteBasedComponentCreationSamplePage;

  beforeEach(() => {
    page = new DynamicRouteBasedComponentCreationSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
