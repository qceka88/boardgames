const {test, expect} = require('@playwright/test');
import {pageURL,} from './pageURL.js'

test('Check boardgames page', async ({page}) => {
    await page.goto(pageURL + 'boardgames');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
});
  