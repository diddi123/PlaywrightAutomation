import {tests,expect} from require('@playwright/test')



const userName  = page.locator('username');
const password  = page.locator('password');
const submit  = page.locator('submit');