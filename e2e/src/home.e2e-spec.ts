import { HomePage } from './home.po';
import { browser, element, by, protractor } from 'protractor';

describe('Home Page', () => {
  let homePage: HomePage;
  beforeEach(async () => {
    homePage = new HomePage();
    await homePage.navigateTo();
  });

  it('should navigate to user profile', async () => {
    const title = await homePage.getWindowTitle();
    expect(title).toEqual('Timeline');
    console.log('------> Teste 0');
  });

  it('should display a list of photos', async () => {
    const photoListSize = await element.all(by.css('.photo')).count();
    expect(photoListSize).toBeGreaterThan(0);
    console.log('------> Teste 1');
  });

  it('should navigate to photo detail when photo navigation is triggered', async () => {
    await element.all(by.css('.photo')).first().sendKeys(protractor.Key.ENTER);
    const title = await browser.getTitle();
    expect(title).toBe('Photo detail');
    console.log('------> Teste 2');
  });

  it('should list one item when filtering by word "farol"', async () => {
    const searchInput = element(by.css('ap-search input[type=search]'));
    await searchInput.sendKeys('farol');
    const list = element.all(by.css('.photo'));
    const photoListSize = await list.count();
    expect(photoListSize).toBe(1);
    console.log('------> Teste 3');
  });
});
