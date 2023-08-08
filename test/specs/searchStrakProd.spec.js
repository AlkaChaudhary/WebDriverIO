const SearchProdPage = require('../pages/searchProd.page')
const SearchResultPage  = require('../pages/searchResultPage')
const EnterPostNummerPage  = require('../pages/enterPostNum.page')
const TilføjetTilKuervenPage = require('../pages/tilføjetTilKuerven.page')

describe('Demo Tests', ()=>  {
    it ('searchStakProduct Test', async()=>{
        browser.url('https://www.stark.dk/')
        browser.maximizeWindow()
        
        await SearchProdPage.acceptCookies()
        await SearchProdPage.productSearch('HELPING HAND Poseholder Pro med Håndtag')
        
        await SearchResultPage.checkSerachResultMsg('Search')
        await SearchResultPage.clickingLægIKurv()

        //await EnterPostNummerPage.checkPostNummerPageMsg(' Tast postnummer for levering')
        await EnterPostNummerPage.enteringPostNummer('2665')
        await EnterPostNummerPage.clickingVælg()

        //await TilføjetTilKuervenPage.checkTilføjetTilKurventMsg('Tilføjet til kurven')
        await TilføjetTilKuervenPage.clickingGåTilKurven()

        /*const buttonAccepteralle = $('button[aria-label="Accepter alle"]')
        buttonAccepteralle.click()
        const inputSearch = $('[id="autosuggest__input"]')
        await inputSearch.setValue("HELPING HAND Poseholder Pro med Håndtag")
        browser.keys('Enter')
        const assertSerachResult = $('=Search')
        await expect(assertSerachResult).toHaveText('Search')*/
    })

})