import {test, expect, Page} from "@playwright/test"

let page: Page

// Here we create the browser instance
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
})

const url = "https://www.gamesforthebrain.com/game/checkers/"
const titleForVerification = "Checkers - Games for the Brain"

// Beginning of test case
test("Checkers Challenge", async() => {
  await page.goto(url)
  let title = await page.title()
  
  if(title === titleForVerification){
    console.log("Site Navigated succesfully, title is a match")
  }
  else{
    console.log("Wrong site was navigated to")
  }


})