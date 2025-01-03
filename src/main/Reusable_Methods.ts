import {test, expect, Page} from "@playwright/test";


// create a function 
export async function click(page: Page, xpath: string, elementName: string){
    console.log("Click on " + elementName)
    await page.locator("xpath="+ xpath).click()
}

export async function clickByIndex(page: Page, xpath: string, index: number, elementName: string){
    console.log("CLick on "+ elementName)
    await page.locator("xpath=" + xpath).nth(index).click()
}

export async function captureText(page: Page, xpath: string, elementName: string){
    console.log("Capture text on "+elementName)
    let result = await page.locator("xpath=" + xpath).textContent()
    return result
}

export async function sendKeys(page : Page, xpath: string, text: string, elementName: string){
    console.log("Sending keys to " + elementName)
    await page.locator("xpath=" + xpath).fill(text)
}


// New Mouse Hover function
export async function mouseHover(page: Page, xpath: string, elementName: string){
    console.log("Hovering over " + elementName)
    await page.locator("xpath=" + xpath).hover()
}

// New Mouse Hover nth function
export async function mouseHoverNth(page: Page, xpath: string, index: number, elementName: string){
    console.log("Hover over " +  elementName)
    await page.locator("xpath="+xpath).nth(index).hover()
}

// New Scroll By Pixel function
export async function scrollByPixel(page: Page, pixelX: number, pixelY: number, elementName: string){
    console.log("Scrolling to "+ elementName)
    await page.mouse.wheel(pixelX, pixelY )
}

// New title verification function 
export async function verifyTitle(page: Page, titleForVerification: string){
    let currentTitle = await page.title() // gets the title of the current page for verification
    if(currentTitle === titleForVerification){ // checks if title is a march for the page we are supposed to be on
        console.log("Site Navigated succesfully, title is a match") // if the title matches we print out that it is a match
      }
      else{
        console.log("Wrong site was navigated to") // otherwise we print out that it was not a match
      }
}

// New funciton to make a move
export async function MovePiece(page: Page, xpathOrigin : string, xpathDestination : string, index : number){
    const messageOne = "Select an orange piece to move." // Mesage to check if we can make the first move
    const messageTwo = "Make a move." // Message to check if we can make a move
    const xpathMessage = "//*[@id = 'message']" // xpath to element that stores message
    let messageText = await captureText(page, xpathMessage, "Captured text for verification") // text used for verificaiton

    if(messageText === messageOne || messageText === messageTwo){ // checks if this is the first move or if it is our turn
        console.log("Move can be made") // Prints out that it is our turn and a move can be made
        await click(page, xpathOrigin, "Piece") // Lets the user know a piece was clicked on
        await page.waitForTimeout(2000) // added wait time due to moving too fast
        await click(page, xpathDestination, "Piece Moved Successfully")// makes the move and prints out that it was made
        if ((index+1) == 3 ){
            console.log("Blue Piece was taken")
        }
        await page.waitForTimeout(2000) // added time to view the piece moving
    }
    else{
        console.log("Sorry couldn't make the move") // prints out that the move couldn't be made
    }
    
}

// New function verify checkers restart
export async function verifiedRestart(page: Page, xpathRestart : string, textToVerify : string){
    const xpathMessage = "//*[@id = 'message']" // xpath for element that contains the message
    await click(page, xpathRestart, "Game Restarted") // click on the restart button
    await page.waitForTimeout(3000) // gives time for the site to relaod if neccesary
    let messageText = await captureText(page, xpathMessage, "for verification") // captures text for us to verify if the game restarted

    if (messageText === textToVerify){ // checks if the message is the one that is displayed when the gane is new
        console.log("Restart Verified") // Prints out that the restart is verified
    }
    else{
        console.log("Restart could not be verified") // otherwise prints out that the restart could not be verified
    }
}