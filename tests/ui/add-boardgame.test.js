const {test, expect} = require('@playwright/test');
import {pageURL,} from './pageURL.js'

test('Check add boardgame page', async ({page}) => {
    await page.goto(pageURL + 'add-boardgame');
    const form = await page.$('form');
    expect(form).toBeTruthy();
});
  