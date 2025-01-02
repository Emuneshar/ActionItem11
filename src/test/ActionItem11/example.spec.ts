import {test, expect, Page} from "@playwright/test"

let page: Page

// Here we create the browser instance
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
})

const url = "https://www.gamesforthebrain.com/game/checkers/"

// Beginning of test case
test("Checkers Challenge", async() => {
  await page.goto(url)
  let title = await page.title()
  console.log(title)
})