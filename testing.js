const selenium = require('selenium-webdriver');
const { Builder, By, Key, until } = selenium;

(async function exampleTest() {
    let driver = await new Builder().forBrowser('chrome').build()

    try {
        await driver.get('https://www.google.com')

        let searchBox = await driver.findElement(By.name('q'))
        await searchBox.sendKeys('Selenium WebDriver', Key.RETURN)

        await driver.wait(until.titleContains('Selenium WebDriver'), 10000)

        console.log("Test Passed: Search Successful")
    } catch (error) {
        console.log("Test Failed: ", error)
    } finally {
        await driver.quit()
    }
})()