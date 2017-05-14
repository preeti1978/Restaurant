import { RestaurantFinderAppPage } from './app.po';

describe('restaurant-finder-app App', function() {
  let page: RestaurantFinderAppPage;

  beforeEach(() => {
    page = new RestaurantFinderAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
