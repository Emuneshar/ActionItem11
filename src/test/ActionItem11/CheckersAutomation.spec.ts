import {test, expect, Page} from "@playwright/test"
import { verifyTitle } from "../../main/Reusable_Methods"

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
  await verifyTitle(page, titleForVerification)


})