import {test, expect, Page} from "@playwright/test"
import { click, MovePiece, verifiedRestart, verifyTitle } from "../../main/Reusable_Methods"

let page: Page

// Here we create the browser instance
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
})

const url = "https://www.gamesforthebrain.com/game/checkers/"
const titleForVerification = "Checkers - Games for the Brain"
const startMessage = "Select an orange piece to move."

let xpathPieces = Array<string>()
xpathPieces.push("//*[@name = 'space62']")
xpathPieces.push("//*[@name = 'space42']")
xpathPieces.push("//*[@name = 'space51']")
xpathPieces.push("//*[@name = 'space31']")
xpathPieces.push("//*[@name = 'space60']")

let xpathPiecesTo = Array<string>()
xpathPiecesTo.push("//*[@name = 'space53']")
xpathPiecesTo.push("//*[@name = 'space33']")
xpathPiecesTo.push("//*[@name = 'space33']")
xpathPiecesTo.push("//*[@name = 'space42']")
xpathPiecesTo.push("//*[@name = 'space51']")

const xpathRestart = "//*[@href = './']"
// Beginning of test case
test("Checkers Challenge", async() => {
  await page.goto(url)
  for(let i = 0; i < xpathPieces.length; i++){
    await MovePiece(page, xpathPieces[i], xpathPiecesTo[i])
  }
  await verifiedRestart(page, xpathRestart, startMessage)
  await page.waitForTimeout(3000)
})