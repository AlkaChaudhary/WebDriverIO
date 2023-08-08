describe('Demo Tests', function () {
    it('My first Test', async () => {
        browser.url('https://www.google.com/')
        browser.maximizeWindow()
        
        const myElement = $('//div[@class="QS5gu sy4vM" and @role="none"]');
        await myElement.click()
       
        //await $('[name="q"]').waitForClickable()
        await $('[name="q"]').setValue('WebdriverIO')
        await $('input.gNO89b[name="btnK"]').waitForClickable()
        await $('input.gNO89b[name="btnK"]').click()
        browser.keys('Enter')
    })
})
