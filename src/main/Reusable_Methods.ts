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