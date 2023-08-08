const { default: AllureReporter } = require("@wdio/allure-reporter");

describe('Demo Tests', function () {

  it('STARK Test Automation Case', async () => {


    AllureReporter.addFeature("Place Order and Confirm");
    AllureReporter.addStory("user-story-5432")
    browser.url('https://www.stark.dk/')
    browser.maximizeWindow()
    browser.waitUntil(
      () => browser.execute(() => document.readyState === 'complete'),
      {
        timeout: 60 * 1000, // 60 seconds
        timeoutMsg: 'Message on failure'
      }
    );
    const buttonAccepteralle = $('button[aria-label="Accepter alle"]');
    buttonAccepteralle.click()

    //Assert that user is present in STARK Main page
    const imgElement = $('img.logoimage')
    await expect(imgElement).toBePresent()

    //Entering  the text HELPING HAND Poseholder Pro med Håndtag in the serarch text field of STARK Main Page
    const inputSearch = $('[id="autosuggest__input"]')
    await inputSearch.setValue("HELPING HAND Poseholder Pro med Håndtag")
    browser.keys('Enter')

    //Assert that user is present in STARK Search result page
    const breadcrumSearch = $('a[title="Search"][href="/Search"]');
    await expect(breadcrumSearch).toBePresent()

    //Clicking on button Læg I Kurv
    const buttonLægIKurv = $('.icon_basket');
    await buttonLægIKurv.click()
    browser.keys('Enter')


    //Entering value for <Postnummer> and select <Vælg> button.
    const inputPostnummer = $('.textfield.w-100.maxwidth-160.mr-2');
    await inputPostnummer.setValue("2665")
    const buttonVælg = $('.btn.primary-btn.w-50')
    await buttonVælg.click()
    browser.keys('Enter')

    //Assert that user is present in Title TILFØJET TIL KURVEN page
    const TitleTilføettilkurven = $('div.modal-title*=Tilføjet til kurven');
    await expect(TitleTilføettilkurven).toBePresent()

    //Clicking on <Gå til kurven> button 

    const buttonGåtilkurven = $('.btn.secondary-btn')
    await buttonGåtilkurven.click()

    //Assert that user is present in Title Kurve page
    const headerKurv = $('h1=Kurv');
    await expect(headerKurv).toBePresent()

    //Clicking on  <Til  købsdetaljer> button from the Kurv Page
    const buttonTilkøbsdetaljer = $('.btn.cta-btn.w-100.mt-4');
    await buttonTilkøbsdetaljer.click()
    browser.pause(5000)


    //Assert that user is present in Title Købsdetaljer page
    const headerKøbsdetaljer = $('h1=Købsdetaljer');
    await expect(headerKøbsdetaljer).toBePresent()

    //On the <Købsdetaljer> page Enter text box value for the DINE OPLYSNINGER and click on <Til leveringsdetaljer> button
    const inputNavn = $('.form-control.textfield');
    await inputNavn.setValue("Alka")
    const inputTelefon = $('#input-1')
    await inputTelefon.setValue("50140000")
    const inputVejnavn = $('[autocomplete="address-line1"]')
    await inputVejnavn.setValue("Egeskovej")
    const inputHusnr = $('[autocomplete="address-line2"]')
    await inputHusnr.setValue("59")
    const inputEmail = $('[type="text"][autocomplete="email"]')
    await inputEmail.waitForClickable()
    await inputEmail.setValue("alka.kumari@gmail.com")
    const inputPostnr = $('[type="number"][autocomplete="shipping postal-code"]')
    await inputPostnr.setValue("2665")
    const inputBy = $('[type="text"][autocomplete="shipping locality"]')
    await inputBy.setValue("Vaælensbæk")
    const buttonLeveringsdetaljer = $('.btn.cta-btn.ml-sm-auto.order-1.order-sm-2.mb-4.mb-sm-0')
    await buttonLeveringsdetaljer.click();


    //Assert that user is present in Title Leveringsdetaljer page
    const headerLeveringsdetaljer = $('h1=Leveringsdetaljer');
    await expect(headerLeveringsdetaljer).toBePresent()

    // On Leveringsdetaljer page enter the value for LEVERING ELLER AFHENTNING and clicking on <Opsummering> button
    const buttonOpsummering = $('//button[contains(@class, "cta-btn")]')
    await buttonOpsummering.click()
    browser.pause(4000)

    //Assert that user is present in Title Opsummering page
    const headerOpsummering = $('h1=Opsummering')
    await expect(headerOpsummering).toBePresent()

    //On Opsummering page accept the checkbox <Jeg har læst og forstået> and click on <TIL BEATLING> button
    const checkBox1 = $('//label[contains(.,"Jeg har læst og forstået")]')
    await checkBox1.click()
    const buttonBetaling = $('//button[text()="Til betaling"]')
    await buttonBetaling.click()
    browser.pause(5000)
  })
})
