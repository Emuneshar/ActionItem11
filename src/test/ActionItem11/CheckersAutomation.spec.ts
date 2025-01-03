import {test, expect, Page} from "@playwright/test"
import { click, MovePiece, verifiedRestart, verifyTitle } from "../../main/Reusable_Methods"

let page: Page

// Here we create the browser instance
test.beforeAll(async ({browser}) => {
    page = await browser.newPage()
})

// Urls, strings and other misc data
const url = "https://www.gamesforthebrain.com/game/checkers/"
const titleForVerification = "Checkers - Games for the Brain"
const startMessage = "Select an orange piece to move."

// xpaths of pieces we will move
let xpathPieces = Array<string>()
xpathPieces.push("//*[@name = 'space62']")
xpathPieces.push("//*[@name = 'space42']")
xpathPieces.push("//*[@name = 'space51']")
xpathPieces.push("//*[@name = 'space31']")
xpathPieces.push("//*[@name = 'space60']")

// corresponding xpaths for where we will move to
let xpathPiecesTo = Array<string>()
xpathPiecesTo.push("//*[@name = 'space53']")
xpathPiecesTo.push("//*[@name = 'space33']")
xpathPiecesTo.push("//*[@name = 'space33']")
xpathPiecesTo.push("//*[@name = 'space42']")
xpathPiecesTo.push("//*[@name = 'space51']")

const xpathRestart = "//*[@href = './']"
// Beginning of test case
test("Checkers Challenge", async() => {
  await page.goto(url) // Navigate to url
  await verifyTitle(page, titleForVerification) // Verify that the title matches and we are on the correct site
  for(let i = 0; i < xpathPieces.length; i++){ // for loop to loop through our 5 moves, planned from manual testing
    console.log("This is move " + (i+1))
    await MovePiece(page, xpathPieces[i], xpathPiecesTo[i], i) // Calling the Move function 5 time to make the 5 pre planned moves , The Blue piece is taken on the 3rd move
  }
  await verifiedRestart(page, xpathRestart, startMessage) // restart the game and verify the restart was successful
  await page.waitForTimeout(3000) // added wait time due to playwright moving fast
}) // end of test case

/*

Thought Process:
First I needed to create a new project, so I created a new folder on my local computer and opened it in VS Code. 
Then I opened the command palette for VS code and selected to install playwright in the folder for the new project. 
This created all of the new files and environments needed to write my test. Next, I changed the test directory in the config file and 
added the timeout of 5000000. After that, I started by manually testing the site and inspecting the checkerboard to see 
what type of elements were available. After noting that each board space had its own name element 
I played the game, capturing an enemy piece on the third move. Noting that the movements and the way to interact with the game were repetitive, 
I noted that I could use a loop for this portion. After I made 5 legal moves, I verified the XPath needed to click the restart button,
 the XPath for the message at the bottom that I will use to verify that it was my turn to make a move, and the XPath for the 
 message that is displayed when it is a new game. 

After that I started writing code, I wrote a Reusable function that would verify that we were on the correct page by 
getting the title of the page we were on and comparing it to the title of the page we were supposed to be on
 and printing out if the titles were a match. 
The next Reusable function that I wrote is called Move piece. This function does most of the work for this test case. 
It first verifies that it is our turn to make a move by making sure that the screen says "Make a move". If it does then we proceed and make
 the move, giving ample time for the screen to update. This function takes in the page, XPath destination, and XPath of where we want to move the piece. 
 If the move can't be made we print that out to the screen.
The last reusable function that I wrote clicks on the restart with a provided Xpath as a parameter, 
then verifies that it was restarted by checking for the text "Select an orange piece to move" which is only displayed when the game is reset. 

*/