class OpsummeringPage {
    get assertOpsummering() {
        return $('h1.mr-auto.pb-0.order-2.order-xl-1')
    }
    get CheckBox1(){
        return $('//label[contains(.,"Jeg har læst og forstået")]')
    }

    get TilBetalingButton() {
        return $('//button[text()="Til betaling"]')
    }

    async checkOpsummeringMsg(msg) {
        await expect(this.assertOpsummering).toHaveText(msg)
    }
    async clickingCheckBox1() {
        await this.CheckBox1.click()
    }
    async clickingTilbetaling() {
        await this.TilBetalingButton.click()
    }

}
module.exports = new OpsummeringPage()