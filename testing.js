/*const selenium = require('selenium-webdriver');
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
})()*/

//const { Builder, By } = require('selenium-webdriver')
//const { except } = require("chai")
    
const { Builer, By } = require ("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome")
const { except } = require("chai")
const chromedriver = require("chromedriver")

describe("Login Test", function () {
    let driver

    before(async function () {
        driver = await new Builder().forBrowser("chrome").setChromeService(new chrome.ServiceBuilder(chromedriver.path)).build()
    })

    it("should log in successfully", async function () {
        await driver.get("https://www.example.com/login")

        await driver.findElement(By.id("username")).sendKeys("testuser")
        await driver.findElement(By.id("password")).sendKeys("password123")
        await driver.findElement(By.id("login-button")).click()

        let title = await driver.getTitle()
        except(title).to.include("Dashboard")
    })

    after(async function () {
        await driver.quit()
    })
})