//Web-Project UI tests
describe('Dashboard', function() {
  it('should rout back to dashboard', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).not.toExist();
  });
  it('should have a title', function() {
    browser.get('http://localhost:8080/#/dashboard');
    expect(browser.getTitle()).toEqual('Threadinator');
    element(by.id('createdAt')).getText();
  });
});
