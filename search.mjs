//const puppeteer = require('puppeteer')
import puppeteer from 'puppeteer'

(async () => {
    // { headless: false, slowMo: 50 }
    const browser = await puppeteer.launch({ headless: false, slowMo: 50 })
    const page = await browser.newPage()

    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ApplewebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    )

    await page.goto('https://www.google.com', {waitUntil: 'domcontentloaded' })

    //console.log("Google loaded successfully")
    
    //await page.waitForSelector('input[name="q"]', { visible: true })

    const acceptButton = await page.$('button[aria-label="Accept all"]')
    if ( acceptButton ) {
        await acceptButton.click()
        await page.waitForTimeout(10000)
    }

    //await page.type('input[name="q"]', 'Puppeteer E2E Testing')

    //await page.keyboard.press('Enter')

    //await page.waitForSelector('h3', { visible: true })

    //const firstResultTitle = await page.$eval('h3', el => el.innerText)
    //console.log(`First search result title: ${firstResultTitle}`)

    const pageTitle = await page.title()
    console.log(`Google Homepage Title: ${pageTitle}`)

    await page.screenshot({ path: 'google-search-result.png' })

    await browser.close()
})()