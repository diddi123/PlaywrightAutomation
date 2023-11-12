const {expect, test} = require("@playwright/test");
const exp = require("constants");

test("Home Page test 0001" ,async ({page})=>{

   await page.goto('https://demoqa.com/text-box');
   await page.locator('#userName').fill('Test Automation')
   await page.locator('#userEmail').fill("Test@Automation")
   await page.locator('#currentAddress').fill('1st street')
   await page.locator('#permanentAddress').fill('second street')
   await expect(await page.locator('#permanentAddress')).toHaveValue('second street');

   const pageUrl = await page.url();
   await console.log('Page URL : ',pageUrl);

   const pageTitleVal = await page.title();
   await console.log('Page URL : ',pageTitleVal);
  
   await expect(page).toHaveTitle('DEMOQA');
   
   await page.locator('#submit').click();

   const btntext =  await page.locator('#submit').textContent();
   console.log(btntext)
   await page.close();


   

})