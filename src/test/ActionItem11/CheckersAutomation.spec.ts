import {test, expect, Page} from "@playwright/test"
import { click, verifyTitle } from "../../main/Reusable_Methods"

let page: Page

// Here we create the browser instance
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
})

const url = "https://www.gamesforthebrain.com/game/checkers/"
const titleForVerification = "Checkers - Games for the Brain"
const xpathFirstPiece = "//*[@name = 'space62']"
const xpathFirstPieceTo = "//*[@name = 'space53']"
const xpathSecondPiece = "//*[@name = 'space42']"
const xpathSecondPieceTo = "//*[@name = 'space33']"
const xpathThirdPiece = "//*[@name = 'space51']"
const xpathThirdPieceTo = "//*[@name = 'space33']"

// Beginning of test case
test("Checkers Challenge", async() => {
  await page.goto(url)
  await verifyTitle(page, titleForVerification)
  await click(page, xpathFirstPiece, "First Piece")
  await click(page, xpathFirstPieceTo, "First piece went successfully")
  await page.waitForTimeout(3000)
  await click(page, xpathSecondPiece, "Second Piece highlighed")
  await page.waitForTimeout(3000)
  await click(page, xpathSecondPieceTo, "Second Piece Moved successfully")
  await page.waitForTimeout(3000)
  await click(page, xpathThirdPiece, "Third Piece Highlighted")
  await page.waitForTimeout(3000)
  await click(page, xpathThirdPieceTo, "Third piece move successsful and enemy piece captured")

})