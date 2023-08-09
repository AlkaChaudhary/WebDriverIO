const SearchProdPage = require('../pages/searchProd.page')
const SearchResultPage = require('../pages/searchResultPage')
const EnterPostNummerPage = require('../pages/enterPostNum.page')
const TilføjetTilKuervenPage = require('../pages/tilføjetTilKuerven.page')
const KurvPage = require('../pages/kurv.page')
const KøbsdetaljerPage = require('../pages/købsdetaljer.page')
const LeveringsdetaljerPage = require('../pages/leveringsdetaljer.page')
const OpsummeringPage = require('../pages/opsummering.page')

describe('STARK POJECT', () => {
    it('searchStakProduct Test', async () => {
        browser.url('https://www.stark.dk/')
        browser.maximizeWindow()

        //Entering  the text HELPING HAND Poseholder Pro med Håndtag in the serarch text field of STARK Main Page
        await SearchProdPage.acceptCookies()
        await SearchProdPage.productSearch('HELPING HAND Poseholder Pro med Håndtag')

        //Assert that user is present in STARK Search result page and clicking on Læg I Kurv Button
        await SearchResultPage.checkSerachResultMsg('Search')
        await SearchResultPage.clickingLægIKurv()
        
        //Assert that user is present in TAST POSTNUMMER FOR LEVERING page and enter the PostNummer value and clicking on Vælg Button
        await EnterPostNummerPage.checkPostNummerPageMsg('TAST POSTNUMMER FOR LEVERING')
        await EnterPostNummerPage.enteringPostNummer('2665')
        await EnterPostNummerPage.clickingVælg()

        //Assert that user is present in TILFØJET TIL KURVEN page and clicking on Gå Til Kurven Button
        await TilføjetTilKuervenPage.checkTilføjetTilKurventMsg('TILFØJET TIL KURVEN')
        await TilføjetTilKuervenPage.clickingGåTilKurven()

        //Assert that user is present in Kurv page and clicking on Til Købsdetaljer Button
        await KurvPage.checkKurvMsg('Kurv')
        await KurvPage.clickingTilKøbsdetaljer()
        browser.pause(5000)

        //Assert that user is present in Købsdetaljer page and clicking on Til Leveringsdetaljer Button
        await KøbsdetaljerPage.checkKøbsdetaljerMsg('Købsdetaljer')
        await KøbsdetaljerPage.enterNavn('Alka')
        await KøbsdetaljerPage.enterTelefon('50146344')
        await KøbsdetaljerPage.enterVejNavn('Egeskovej')
        await KøbsdetaljerPage.enterHusnr('59')
        await KøbsdetaljerPage.enterEmail('alka.kumari@gmail.com')
        await KøbsdetaljerPage.enterPostnr('2665')
        await KøbsdetaljerPage.enterBy("Valensbæk")
        await KøbsdetaljerPage.clickingTilLeveringsdetaljer()

        //Assert that user is present in Leveringsdetaljer page and clicking on Til Opsummering Button
        await LeveringsdetaljerPage.checkLeveringsdetaljerMsg('Leveringsdetaljer')
        await LeveringsdetaljerPage.clickingTilOpsummering()

        //Assert that user is present in Opsummering page and clicking on Til betaling Button
        await OpsummeringPage.checkOpsummeringMsg('Opsummering')
        await OpsummeringPage.clickingCheckBox1()
        await OpsummeringPage.clickingTilbetaling()

    })

})